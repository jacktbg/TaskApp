import styles from "./styles/taskCard.module.scss"
import type { TaskProps } from "../../../../models/taskProps"
import { ProjectInfo } from "./components/ProjectInfo"
import { Timer } from "./components/Timer"
import { Tags } from "./components/Tags"
import { Reactions } from "./components/Reactions"

interface TaskCardProps {
  task: TaskProps
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
}) => {
  const { name, pointEstimate, dueDate, tags, avatar } =
    task

  return (
    <td className={styles.taskCard}>
      <ProjectInfo name={name} />
      <Timer
        pointEstimate={pointEstimate}
        dueDate={dueDate}
      />
      <Tags tags={tags} />
      <Reactions avatar={avatar} />
    </td>
  )
}
