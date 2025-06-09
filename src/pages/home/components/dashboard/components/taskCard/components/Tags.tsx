import type { TaskTag } from "../../../../../models/taskProps"
import { Tag } from "../../../../ui/Tag"
import styles from "../styles/tags.module.scss"

interface TagsProps {
  tags: TaskTag[]
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, i) => (
        <Tag tag={tag} key={i} />
      ))}
    </div>
  )
}
