import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@apollo/client"
import {
  CREATE_TASK_MUTATION,
  UPDATE_TASK_MUTATION,
} from "../services/mutations"
import styles from "../styles/taskForm.module.scss"
import { AssigneeTag } from "./AssigneeTag"
import { DueDateTag } from "./DueDateTag"
import { EstimateTag } from "./EstimateTag"
import { LabelTag } from "./LabelTag"
import { Dialog } from "radix-ui"
import { GET_MY_TASK, GET_TASKS } from "../services/queries"
import {
  useSearchFormStore,
  useTabStore,
  useTaskStore,
  useToastStore,
  useUserStore,
} from "../store/useStore"
import { useEffect, useMemo } from "react"
import { XIcon } from "../pages/home/icons/Icons"
import { useDebounce } from "../utilities/useDebounce"

type TaskFormProps = {
  setOpen: (boolean: boolean) => void
}
const createTaskSchema = z.object({
  name: z
    .string()
    .min(1, "Task Title is required")
    .max(12, "Max 12")
    .trim(),
  pointEstimate: z.enum(
    ["ZERO", "ONE", "TWO", "FOUR", "EIGHT"],
    {
      errorMap: () => ({
        message: "Estimate required",
      }),
    }
  ),
  assigneeId: z.string().min(1, "Assignee required"),
  labels: z
    .array(
      z.enum([
        "ANDROID",
        "IOS",
        "NODE_JS",
        "RAILS",
        "REACT",
      ])
    )
    .min(1, "Label required"),
  dueDate: z
    .date({ required_error: "Due date required" })
    .refine(
      (date) => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return date >= today
      },
      { message: "Due date must be today or later" }
    ),
})

type CreateTaskForm = z.infer<typeof createTaskSchema>

export const TaskForm: React.FC<TaskFormProps> = ({
  setOpen,
}) => {
  const showToast = useToastStore(
    (state) => state.showToast
  )
  const taskToEdit = useTaskStore(
    (state) => state.currentTask
  )
  const activeTab = useTabStore((state) => state.activeTab)

  const name = useSearchFormStore((state) => state.name)
  const pointEstimate = useSearchFormStore(
    (state) => state.pointEstimate
  )
  const ownerId = useSearchFormStore(
    (state) => state.ownerId
  )
  const status = useSearchFormStore((state) => state.status)
  const tags = useSearchFormStore((state) => state.tags)
  const dueDate = useSearchFormStore(
    (state) => state.dueDate
  )

  const filters = useMemo(
    () => ({
      name,
      pointEstimate,
      ownerId,
      status,
      tags,
      dueDate,
    }),
    [name, pointEstimate, ownerId, status, tags, dueDate]
  )

  const debouncedFilters = useDebounce(filters, 400)

  const cleanedFilters = useMemo(() => {
    return Object.fromEntries(
      Object.entries({
        ...debouncedFilters,
        tags: debouncedFilters.tags?.length
          ? debouncedFilters.tags
          : undefined,
        name: debouncedFilters.name?.trim() || undefined,
      }).filter(([, v]) => v !== undefined)
    )
  }, [debouncedFilters])

  const id = useUserStore((state) => state.id)
  const mode = useTaskStore((state) => state.mode)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateTaskForm>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      name: "",
      assigneeId: "",
      labels: [],
    },
  })
  useEffect(() => {
    if (mode === "edit" && taskToEdit) {
      reset({
        assigneeId: taskToEdit.assignee.id,
        dueDate: new Date(taskToEdit.dueDate),
        name: taskToEdit.name,
        labels: taskToEdit.tags,
        pointEstimate: taskToEdit.pointEstimate,
      })
    } else {
      reset({
        name: "",
        assigneeId: "",
        labels: [],
      })
    }
  }, [mode, taskToEdit, reset])

  const [createTask] = useMutation(CREATE_TASK_MUTATION, {
    refetchQueries: [
      {
        query:
          activeTab === "all" ? GET_TASKS : GET_MY_TASK,
        variables: {
          input:
            activeTab === "all"
              ? { ...cleanedFilters }
              : { ...cleanedFilters, assigneeId: id },
        },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
      showToast("✅ Task created successfully!")
      console.log("✅ Task created:", data)
      reset()
      setOpen(false)
    },
    onError: (err) => {
      console.error(
        "❌ Error creating task:",
        err.message,
        err.cause
      )
    },
  })

  const [updateTask] = useMutation(UPDATE_TASK_MUTATION, {
    refetchQueries: [
      {
        query:
          activeTab === "all" ? GET_TASKS : GET_MY_TASK,
        variables: {
          input:
            activeTab === "all"
              ? { ...filters }
              : { ...filters, assigneeId: id },
        },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
      showToast("✅ Task updated successfully!")
      console.log("✅ Task updated:", data)
      reset()
      setOpen(false)
    },
    onError: (err) => {
      console.error("❌ Error creating task:", err)
    },
  })

  const onSubmit = async (data: CreateTaskForm) => {
    try {
      if (mode === "edit" && taskToEdit) {
        await updateTask({
          variables: {
            input: {
              assigneeId: data.assigneeId,
              dueDate: data.dueDate.toISOString(),
              id: taskToEdit.id,
              name: data.name,
              pointEstimate: data.pointEstimate,
              position: taskToEdit.position,
              status: taskToEdit.status,
              tags: data.labels,
            },
          },
        })
      } else {
        await createTask({
          variables: {
            input: {
              assigneeId: data.assigneeId,
              dueDate: data.dueDate.toISOString(),
              name: data.name,
              pointEstimate: data.pointEstimate,
              status: "BACKLOG",
              tags: data.labels,
            },
          },
        })
      }
      reset()
    } catch (err) {
      console.error("❌ Error creating task:", err)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <input
        className={styles.name}
        placeholder="Task Title"
        {...register("name")}
      />

      <div className={styles.error}>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className={styles.tags}>
        <Controller
          control={control}
          name="pointEstimate"
          render={({ field }) => (
            <EstimateTag
              estimate={field.value}
              setEstimate={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="assigneeId"
          render={({ field }) => (
            <AssigneeTag
              assigneeId={field.value}
              setAssigneeId={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="labels"
          render={({ field }) => (
            <LabelTag
              label={field.value}
              setLabel={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="dueDate"
          render={({ field }) => (
            <DueDateTag
              date={field.value}
              setDate={field.onChange}
            />
          )}
        />
      </div>

      <div className={styles.errorGroup}>
        {errors.pointEstimate && (
          <p>{errors.pointEstimate.message}</p>
        )}
        {errors.assigneeId && (
          <p>{errors.assigneeId.message}</p>
        )}
        {errors.labels && <p>{errors.labels.message}</p>}

        {errors.dueDate && <p>{errors.dueDate.message}</p>}
      </div>

      <div className={styles.buttons}>
        <Dialog.Close asChild>
          <button type="button" className={styles.cancel}>
            <p className={styles.text}>Cancel</p>
            <div className={styles.iconWrapper}>
              <XIcon className={styles.xIcon} />
            </div>
          </button>
        </Dialog.Close>
        <button type="submit" className={styles.create}>
          {mode === "edit" ? "Update" : "Create"}
        </button>
      </div>
    </form>
  )
}
