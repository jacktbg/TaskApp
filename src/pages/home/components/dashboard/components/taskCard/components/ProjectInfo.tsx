import type { Task } from "../../../../../models/taskProps"
import styles from "../styles/projectInfo.module.scss"
import { MenuDots } from "./MenuDots"

interface ProjectInfoProps {
  name: string
  task: Task
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({
  name,
  task,
}) => {
  return (
    <div className={styles.projectInfo}>
      <h2 className={styles.name}>{name}</h2>
      <MenuDots task={task} />
    </div>
  )
}
