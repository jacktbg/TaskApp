import { useQuery } from "@apollo/client"
import type { Status, Task } from "../../models/taskProps"
import { MyTaskAccordion } from "./components/myTaskAccordion/MyTaskAccordion"
import { MyTaskTitles } from "./components/myTaskTitles/MyTaskTitles"
import styles from "./styles/myTask.module.scss"
import { GET_TASKS } from "../../../../services/queries"
import { useMemo } from "react"
import { useFilterStore } from "../../../../store/useStore"

const statusMap: Record<string, Status> = {
  "To Do": "TODO",
  "In Progress": "IN_PROGRESS",
  Reviews: "DONE",
  Backlog: "BACKLOG",
  Cancelled: "CANCELLED",
}

const accordionTitles = Object.keys(statusMap)

export const MyTask = () => {
  const filters = useFilterStore((state) => state.filters)
  const { data, loading, error } = useQuery(GET_TASKS, {
    variables: { input: { ...filters } },
  })

  const tasks: Task[] = data?.tasks || []

  const tasksByStatus = useMemo(() => {
    return accordionTitles.reduce((acc, title) => {
      acc[title] = tasks.filter(
        (task) => task.status === statusMap[title]
      )
      return acc
    }, {} as Record<string, Task[]>)
  }, [tasks])

  if (loading) return <p>Loading tasks...</p>
  if (error)
    return <p>Error loading tasks: {error.message}</p>

  return (
    <div className={styles.myTaskContainer}>
      <MyTaskTitles />
      {accordionTitles.map((title) => (
        <MyTaskAccordion
          key={title}
          title={title}
          tasks={tasksByStatus[title]}
        />
      ))}
    </div>
  )
}
