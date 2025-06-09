import type { Status, Task } from "../../models/taskProps"
import { MyTaskAccordion } from "./components/myTaskAccordion/MyTaskAccordion"
import { MyTaskTitles } from "./components/myTaskTitles/MyTaskTitles"
import styles from "./styles/myTask.module.scss"

const statusMap: Record<string, Status> = {
  "To Do": "TODO",
  "In Progress": "IN_PROGRESS",
  Reviews: "DONE",
  Backlog: "BACKLOG",
  Cancelled: "CANCELLED",
}

const accordionTitles = Object.keys(statusMap)

const tasks: Task[] = [
  {
    id: "b09bfcc0-0b4b-47ac-8010-bf327d726c5e",
    name: "Ticket7",
    pointEstimate: "TWO",
    dueDate: "2025-05-30T23:53:06.177Z",
    tags: ["REACT", "NODE_JS"],
    status: "TODO",
    assignee: {
      avatar:
        "https://avatars.dicebear.com/api/initials/rb.svg",
      fullName: "Romeo Barnes",
    },
    position: 1,
  },
]

export const MyTask = () => {
  return (
    <div className={styles.myTaskContainer}>
      <MyTaskTitles />
      {accordionTitles.map((title) => (
        <MyTaskAccordion
          title={title}
          tasks={tasks.filter(
            (task) => task.status === statusMap[title]
          )}
          key={title}
        />
      ))}
    </div>
  )
}
