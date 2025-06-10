import styles from "./styles/accordionTask.module.scss"
import { AssignNameCell } from "./components/AssignNameCell"
import { DueDateCell } from "./components/DueDateCell"
import { EstimateCell } from "./components/EstimateCell"
import { NameCell } from "./components/NameCell"
import { TagCell } from "./components/TagCell"
import type { Task } from "../../../../../../models/taskProps"
import React from "react"
import { useDraggable } from "@dnd-kit/core"

interface AccordionTaskProps {
  task: Task
}

const AccordionTaskComponent: React.FC<
  AccordionTaskProps
> = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: task.id, // 👈 Important: unique id for the task
  })
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
    transition: "transform 200ms ease",
    // ...other styles like cursor or background
  }

  const {
    position,
    name,
    pointEstimate,
    dueDate,
    tags,
    assignee,
  } = task

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      <div className={styles.taskContainer}>
        <NameCell position={position} name={name} />
        <TagCell tags={tags} />
        <EstimateCell pointEstimate={pointEstimate} />
        <AssignNameCell assignee={assignee} />
        <DueDateCell dueDate={dueDate} />
      </div>
    </div>
  )
}

export const AccordionTask = React.memo(
  AccordionTaskComponent
)
