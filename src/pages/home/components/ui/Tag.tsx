import styles from "./styles/tag.module.scss"
import type { TaskTag } from "../../models/taskProps"

interface TagProps {
  tag: TaskTag
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className={styles[tag]} key={tag}>
      {tag}
    </div>
  )
}
