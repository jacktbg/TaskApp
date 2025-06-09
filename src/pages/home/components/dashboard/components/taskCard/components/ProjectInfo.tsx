import styles from "../styles/projectInfo.module.scss"
import { MenuDots } from "./MenuDots"

interface ProjectInfoProps {
  name: string
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({
  name,
}) => {
  return (
    <div className={styles.projectInfo}>
      <h2 className={styles.name}>{name}</h2>
      <MenuDots />
    </div>
  )
}
