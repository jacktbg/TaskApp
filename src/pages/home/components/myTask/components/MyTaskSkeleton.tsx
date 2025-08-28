import type {
  Status,
  Task,
} from "../../../models/taskProps"
import styles from "../styles/myTaskSkeleton.module.scss"
import { MyTaskAccordion } from "./myTaskAccordion/MyTaskAccordion"
import { MyTaskTitles } from "./myTaskTitles/MyTaskTitles"

const statusMap: Record<string, Status> = {
  Backlog: "BACKLOG",
  "To Do": "TODO",
  "In Progress": "IN_PROGRESS",
  Reviews: "DONE",
  Cancelled: "CANCELLED",
}

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
        fullName: "Loading...",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Loading...",
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
        fullName: "Loading...",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Loading...",
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
        fullName: "Loading...",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Loading...",
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
        fullName: "Loading...",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Loading...",
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
        fullName: "Loading...",
      },
      position: 2,
      creator: {
        id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
        fullName: "Loading...",
      },
    },
  ],
}
const accordionTitles = Object.keys(statusMap)

export const MyTaskSkeleton = () => {
  return (
    <div className={styles.myTaskContainer}>
      <MyTaskTitles />

      {accordionTitles.map((title) => {
        const status = statusMap[title]
        return (
          <MyTaskAccordion
            key={title}
            title={title}
            droppableId={status}
            tasks={tasksByStatus[status]}
          />
        )
      })}
    </div>
  )
}
