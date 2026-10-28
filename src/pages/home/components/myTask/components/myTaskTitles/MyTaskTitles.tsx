import styles from "./styles/myTaskTitles.module.scss"
import { MyTaskTitle } from "./MyTaskTitle"

type titleItem = {
  title: string
  className: string
}

const titles: titleItem[] = [
  { title: "# task name", className: "name" },
  { title: "task tags", className: "tags" },
  { title: "estimate", className: "estimate" },
  { title: "task assign name", className: "assignee" },
  { title: "due date", className: "dueDate" },
]

export const MyTaskTitles = () => {
  return (
    <div className={styles.titlesContainer}>
      {titles.map((t) => (
        <MyTaskTitle
          title={t.title}
          key={t.title}
          width={t.className}
        />
      ))}
    </div>
  )
}
