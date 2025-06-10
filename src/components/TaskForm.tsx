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
import { GET_TASKS } from "../services/queries"
import { useTaskStore } from "../store/useStore"
import { useEffect } from "react"

type TaskFormProps = {
  setOpen: (boolean: boolean) => void
}
const createTaskSchema = z.object({
  name: z.string().min(1, "Task Title is required"),
  pointEstimate: z.enum(
    ["ZERO", "ONE", "TWO", "FOUR", "EIGHT"],
    {
      errorMap: () => ({
        message: "Point Estimate is required",
      }),
    }
  ),
  assigneeId: z.string().min(1, "Assignee is required"),
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
    .min(1, "At least one label is required"),
  dueDate: z.date().refine(
    (date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0) // clear time
      return date >= today
    },
    { message: "Due date must be today or later" }
  ),
})

type CreateTaskForm = z.infer<typeof createTaskSchema>

export const TaskForm: React.FC<TaskFormProps> = ({
  setOpen,
}) => {
  const taskToEdit = useTaskStore(
    (state) => state.currentTask
  )
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
        query: GET_TASKS,
        variables: {
          input: {},
        },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
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
        query: GET_TASKS,
        variables: {
          input: {},
        },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: (data) => {
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
              status: "TODO",
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
            Cancel
          </button>
        </Dialog.Close>
        <button type="submit" className={styles.create}>
          {mode === "edit" ? "Update" : "Create"}
        </button>
      </div>
    </form>
  )
}
