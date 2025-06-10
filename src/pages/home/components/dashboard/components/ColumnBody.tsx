import type {
  Status,
  Task,
} from "../../../models/taskProps"
import { TaskCard } from "./taskCard/TaskCard"
import styles from "../styles/columnBody.module.scss"
import { useDroppable } from "@dnd-kit/core"

interface ColumnBodyProps {
  tasks: Task[]
  status: Status
}

export const ColumnBody: React.FC<ColumnBodyProps> = ({
  tasks,
  status,
}) => {
  const { setNodeRef } = useDroppable({
    id: status,
  })
  return (
    <tr
      className={styles.column}
      key={status}
      ref={setNodeRef}
    >
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </tr>
  )
}
