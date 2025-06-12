import { useMutation, useQuery } from "@apollo/client"
import type { Status, Task } from "../../models/taskProps"
import styles from "./styles/dashboard.module.scss"
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
import { closestCenter, DndContext } from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"
import { UPDATE_TASK_MUTATION } from "../../../../services/mutations"
import { ColumnBody } from "./components/ColumnBody"
import { useDebounce } from "../../../../utilities/useDebounce"
import { DashboardSkeleton } from "./components/DashboardSkeleton"

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
      ? { input: cleanedFilters }
      : { input: { ...cleanedFilters, assigneeId: id } }

  console.log("cleanedFilters: ", cleanedFilters)
  console.log("variables: ", variables)

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

  if (loading) return <DashboardSkeleton />
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
