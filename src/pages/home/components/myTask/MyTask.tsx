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
  useSearchFormStore,
  useTabStore,
  useUserStore,
} from "../../../../store/useStore"
import { UPDATE_TASK_MUTATION } from "../../../../services/mutations"
import {
  closestCenter,
  DndContext,
  type DragEndEvent,
} from "@dnd-kit/core"
import { useDebounce } from "../../../../utilities/useDebounce"
import { MyTaskSkeleton } from "./components/MyTaskSkeleton"

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

  const query =
    activeTab === "all" ? GET_TASKS : GET_MY_TASK
  const variables =
    activeTab === "all"
      ? { input: { ...cleanedFilters } }
      : { input: { ...cleanedFilters, assigneeId: id } }

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

  if (loading) return <MyTaskSkeleton />
  if (error)
    return <p>Error loading tasks: {error.message}</p>

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const taskId = active.id
    const newStatus = over.id as Status

    const task = tasks.find((t) => t.id === taskId)
    if (!task) return

    if (task.status === newStatus) return

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
