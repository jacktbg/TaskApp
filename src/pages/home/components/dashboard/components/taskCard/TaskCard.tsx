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
        ? `translate3d(${transform.x}px, ${
            transform.y
          }px, 0) scale(${isDragging ? 0.98 : 1})`
        : `scale(1)`,
      opacity: isDragging ? 0.7 : 1,
      transition: isDragging
        ? "transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease"
        : "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
      boxShadow: isDragging
        ? "0 6px 20px rgba(0, 0, 0, 0.15)"
        : "0 1px 4px rgba(0, 0, 0, 0.08)",
      zIndex: isDragging ? 10 : undefined,
    }
    return (
      <td
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <div className={styles.taskCard}>
          <ProjectInfo name={name} task={task} />

          <Timer
            pointEstimate={pointEstimate}
            dueDate={dueDate}
          />
          <Tags tags={tags} />
          <Reactions user={assignee} />
        </div>
      </td>
    )
  }
)
