import type {
  Status,
  Task,
} from "../../../models/taskProps"
import styles from "../styles/dashboardSkeleton.module.scss"
import { ColumnBody } from "./ColumnBody"

const statusMap: Record<string, Status> = {
  Working: "TODO",
  "In Progress": "IN_PROGRESS",
  Completed: "DONE",
  Backlog: "BACKLOG",
  Cancelled: "CANCELLED",
}
const titles = Object.keys(statusMap)

const tasksByStatus: Record<Status, Task[]> = {
  TODO: [
    {
      id: "5fe463e2-620f-4909-bebf-c03bf912a832",
      name: "Loading...",
      pointEstimate: "ZERO",
      dueDate: "2025-06-08T23:53:06.177Z",
      tags: ["RAILS", "NODE_JS"],
      status: "TODO",
      assignee: {
        avatar:
          "https://avatars.dicebear.com/api/initials/jd.svg",
        fullName: "Jhon Doe",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Jhon Doe",
      },
    },
  ],
  IN_PROGRESS: [
    {
      id: "5fe463e2-620f-4909-bebf-c03bf912a832",
      name: "Loading...",
      pointEstimate: "ZERO",
      dueDate: "2025-06-08T23:53:06.177Z",
      tags: ["RAILS", "NODE_JS"],
      status: "IN_PROGRESS",
      assignee: {
        avatar:
          "https://avatars.dicebear.com/api/initials/jd.svg",
        fullName: "Jhon Doe",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Jhon Doe",
      },
    },
  ],
  DONE: [
    {
      id: "5fe463e2-620f-4909-bebf-c03bf912a832",
      name: "Loading...",
      pointEstimate: "ZERO",
      dueDate: "2025-06-08T23:53:06.177Z",
      tags: ["RAILS", "NODE_JS"],
      status: "DONE",
      assignee: {
        avatar:
          "https://avatars.dicebear.com/api/initials/jd.svg",
        fullName: "Jhon Doe",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Jhon Doe",
      },
    },
  ],
  BACKLOG: [
    {
      id: "5fe463e2-620f-4909-bebf-c03bf912a832",
      name: "Loading...",
      pointEstimate: "ZERO",
      dueDate: "2025-06-08T23:53:06.177Z",
      tags: ["RAILS", "NODE_JS"],
      status: "BACKLOG",
      assignee: {
        avatar:
          "https://avatars.dicebear.com/api/initials/jd.svg",
        fullName: "Jhon DTODOoe",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Jhon Doe",
      },
    },
  ],
  CANCELLED: [
    {
      id: "5fe463e2-620f-4909-bebf-c03bf912a832",
      name: "Loading...",
      pointEstimate: "ZERO",
      dueDate: "2025-06-08T23:53:06.177Z",
      tags: ["RAILS", "NODE_JS"],
      status: "CANCELLED",
      assignee: {
        avatar:
          "https://avatars.dicebear.com/api/initials/jd.svg",
        fullName: "Jhon Doe",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Jhon Doe",
      },
    },
  ],
}
export const DashboardSkeleton = () => {
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
            <ColumnBody
              tasks={filteredTasks}
              status={status}
              key={status}
            />
          )
        })}
      </tbody>
    </table>
  )
}
