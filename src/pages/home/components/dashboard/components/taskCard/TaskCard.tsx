import styles from "./styles/taskCard.module.scss"
import type { Task } from "../../../../models/taskProps"
import { ProjectInfo } from "./components/ProjectInfo"
import { Timer } from "./components/Timer"
import { Tags } from "./components/Tags"
import { Reactions } from "./components/Reactions"
import React from "react"

interface TaskCardProps {
  task: Task
}

export const TaskCard = React.memo(
  ({ task }: TaskCardProps) => {
    const { name, pointEstimate, dueDate, tags, assignee } =
      task

    return (
      <td className={styles.taskCard}>
        <ProjectInfo name={name} task={task} />
        <Timer
          pointEstimate={pointEstimate}
          dueDate={dueDate}
        />
        <Tags tags={tags} />
        <Reactions user={assignee} />
      </td>
    )
  }
)
