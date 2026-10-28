import styles from "../styles/menuDots.module.scss"
import { Popover } from "radix-ui"
import {
  DeleteIcon,
  ThreeDotsIcon,
} from "../../../../../icons/Icons"
import { EditOption } from "./EditOption"
import type { Task } from "../../../../../models/taskProps"
import { useMutation } from "@apollo/client"
import { DELETE_TASK_MUTATION } from "../../../../../../../services/mutations"
import {
  GET_MY_TASK,
  GET_TASKS,
} from "../../../../../../../services/queries"
import {
  useSearchFormStore,
  useTabStore,
  useToastStore,
  useUserStore,
} from "../../../../../../../store/useStore"
import { useMemo } from "react"
import { useDebounce } from "../../../../../../../utilities/useDebounce"

interface MenuDotsProps {
  task: Task
}

export const MenuDots: React.FC<MenuDotsProps> = ({
  task,
}) => {
  const showToast = useToastStore(
    (state) => state.showToast
  )
  const id = useUserStore((state) => state.id)

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

  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    variables: { input: { id: task.id } },
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
    onCompleted: () => {
      showToast("✅ Task deleted successfully!")
      console.log("✅ Task deleted")
    },
    onError: (error) => {
      console.error(
        "❌ Error deleting task:",
        error.message
      )
    },
  })

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div
          className={styles.iconWrapper}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <ThreeDotsIcon className={styles.icon} />
        </div>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Content
        side={"bottom"}
        align={"end"}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <div className={styles.optionsContainer}>
          <EditOption task={task} />
          <div
            className={styles.option}
            onClick={() => deleteTask()}
          >
            <div className={styles.iconWrapper}>
              <DeleteIcon className={styles.delete} />
            </div>
            <p className={styles.text}>Delete</p>
          </div>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover.Root>
  )
}
