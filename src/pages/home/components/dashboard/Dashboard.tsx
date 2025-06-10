import { useMutation, useQuery } from "@apollo/client"
import type { Status, Task } from "../../models/taskProps"
import styles from "./styles/dashboard.module.scss"
import {
  GET_MY_TASK,
  GET_TASKS,
} from "../../../../services/queries"
import { useMemo } from "react"
import {
  useFilterStore,
  useTabStore,
  useUserStore,
} from "../../../../store/useStore"
import { closestCenter, DndContext } from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"
import { UPDATE_TASK_MUTATION } from "../../../../services/mutations"
import { ColumnBody } from "./components/ColumnBody"

const statusMap: Record<string, Status> = {
  Working: "TODO",
  "In Progress": "IN_PROGRESS",
  Completed: "DONE",
  Backlog: "BACKLOG",
  Cancelled: "CANCELLED",
}
const titles = Object.keys(statusMap)

export const Dashboard: React.FC = () => {
  const activeTab = useTabStore((state) => state.activeTab)
  const id = useUserStore((state) => state.id)

  const [updateTask] = useMutation(UPDATE_TASK_MUTATION)
  const filters = useFilterStore((state) => state.filters)
  const query =
    activeTab === "all" ? GET_TASKS : GET_MY_TASK
  const variables =
    activeTab === "all"
      ? { input: { ...filters } }
      : { input: { ...filters, assigneeId: id } }
  const { data, loading, error } = useQuery(query, {
    variables,
  })

  const tasks: Task[] = data?.tasks || []

  const tasksByStatus = useMemo(() => {
    return titles.reduce((acc, title) => {
      const status = statusMap[title]
      acc[status] = tasks.filter(
        (task) => task.status === status
      )
      return acc
    }, {} as Record<Status, Task[]>)
  }, [tasks])
  if (loading) return <p>Loading tasks...</p>
  if (error)
    return <p>Error loading tasks: {error.message}</p>

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const taskId = active.id
    const newStatus = over.id as Status

    try {
      await updateTask({
        variables: {
          input: {
            id: taskId,
            status: newStatus,
          },
        },
      })
    } catch (err) {
      console.error("Failed to update task:", err)
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            {titles.map((title) => {
              const status = statusMap[title]
              const filteredTasks = tasksByStatus[status]
              const count =
                " (" + filteredTasks.length + ")"
              return (
                <th className={styles.title} key={title}>
                  {`${title}`}
                  <p className={styles.count}>{count}</p>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {titles.map((title) => {
            const status = statusMap[title]
            const filteredTasks = tasksByStatus[status]

            return (
              <ColumnBody
                tasks={filteredTasks}
                status={status}
                key={status}
              />
            )
          })}
        </tbody>
      </table>
    </DndContext>
  )
}
