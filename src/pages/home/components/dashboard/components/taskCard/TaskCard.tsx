import styles from "./styles/taskCard.module.scss"
import type { Task } from "../../../../models/taskProps"
import { ProjectInfo } from "./components/ProjectInfo"
import { Timer } from "./components/Timer"
import { Tags } from "./components/Tags"
import { Reactions } from "./components/Reactions"
import React from "react"
import { useDraggable } from "@dnd-kit/core"

interface TaskCardProps {
  task: Task
}

export const TaskCard = React.memo(
  ({ task }: TaskCardProps) => {
    const { name, pointEstimate, dueDate, tags, assignee } =
      task
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      isDragging,
    } = useDraggable({ id: task.id })

    const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      opacity: isDragging ? 0.5 : 1,
      transition: "transform 200ms ease",
    }
    return (
      <td ref={setNodeRef} style={style}>
        <div className={styles.taskCard}>
          <ProjectInfo name={name} task={task} />

          <Timer
            pointEstimate={pointEstimate}
            dueDate={dueDate}
          />
          <Tags tags={tags} />
          <div
            className={styles.hand}
            {...listeners}
            {...attributes}
          >
            <Reactions user={assignee} />
          </div>
        </div>
      </td>
    )
  }
)
