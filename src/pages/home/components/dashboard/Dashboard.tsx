import { useQuery } from "@apollo/client"
import type { Status, Task } from "../../models/taskProps"
import { TaskCard } from "./components/taskCard/TaskCard"
import styles from "./styles/dashboard.module.scss"
import { GET_TASKS } from "../../../../services/queries"
import { useMemo } from "react"
import { useFilterStore } from "../../../../store/useStore"

const statusMap: Record<string, Status> = {
  Working: "TODO",
  "In Progress": "IN_PROGRESS",
  Completed: "DONE",
  // Backlog: "BACKLOG",
  // Cancelled: "CANCELLED",
}
const titles = Object.keys(statusMap)

export const Dashboard: React.FC = () => {
  const filters = useFilterStore((state) => state.filters)
  const { data, loading, error } = useQuery(GET_TASKS, {
    variables: {
      input: { ...filters },
    },
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
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          {titles.map((title) => {
            const status = statusMap[title]
            const filteredTasks = tasksByStatus[status]
            const count = " (" + filteredTasks.length + ")"
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
            <tr className={styles.column} key={status}>
              {filteredTasks.map((taskFiltered) => (
                <TaskCard
                  task={taskFiltered}
                  key={taskFiltered.id}
                />
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
