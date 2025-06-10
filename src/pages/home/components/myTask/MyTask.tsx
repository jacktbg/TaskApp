import { useMutation, useQuery } from "@apollo/client"
import type { Status, Task } from "../../models/taskProps"
import { MyTaskAccordion } from "./components/myTaskAccordion/MyTaskAccordion"
import { MyTaskTitles } from "./components/myTaskTitles/MyTaskTitles"
import styles from "./styles/myTask.module.scss"
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
import { UPDATE_TASK_MUTATION } from "../../../../services/mutations"
import {
  closestCenter,
  DndContext,
  type DragEndEvent,
} from "@dnd-kit/core"

const statusMap: Record<string, Status> = {
  Backlog: "BACKLOG",
  "To Do": "TODO",
  "In Progress": "IN_PROGRESS",
  Reviews: "DONE",
  Cancelled: "CANCELLED",
}

const accordionTitles = Object.keys(statusMap)

export const MyTask = () => {
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

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const taskId = active.id
    const newStatus = over.id // should be the status like "IN_PROGRESS"

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
    <div className={styles.myTaskContainer}>
      <MyTaskTitles />
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {accordionTitles.map((title) => (
          <MyTaskAccordion
            key={title}
            title={title}
            droppableId={statusMap[title]}
            tasks={tasksByStatus[title]}
          />
        ))}
      </DndContext>
    </div>
  )
}
