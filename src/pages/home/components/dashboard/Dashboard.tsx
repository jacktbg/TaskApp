import type { TaskProps } from "../../models/taskProps"
import { TaskCard } from "./components/taskCard/TaskCard"
import styles from "./styles/dashboard.module.scss"

const titles: string[] = [
  "working (03)",
  "in progress (03)",
  "completed (03)",
]

const task: TaskProps = {
  id: "acbf0a5c-911a-4303-a707-5403bd16dc4a",
  name: "Ticket4",
  pointEstimate: "ZERO",
  dueDate: "2025-06-04T23:53:06.177Z",
  tags: ["REACT", "ANDROID", "IOS"],
  status: "IN_PROGRESS",
  avatar:
    "https://avatars.dicebear.com/api/initials/jd.svg",
}

export const Dashboard: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          {titles.map((title) => (
            <th
              className={styles.title}
              key={title}
            >{`${title}`}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        <tr className={styles.column}>
          <TaskCard task={task} key={task.id} />
        </tr>
      </tbody>
    </table>
  )
}
