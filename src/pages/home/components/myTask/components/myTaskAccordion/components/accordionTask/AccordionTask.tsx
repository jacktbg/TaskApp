import styles from "./styles/accordionTask.module.scss"
import { AssignNameCell } from "./components/AssignNameCell"
import { DueDateCell } from "./components/DueDateCell"
import { EstimateCell } from "./components/EstimateCell"
import { NameCell } from "./components/NameCell"
import { TagCell } from "./components/TagCell"
import type { Task } from "../../../../../../models/taskProps"

interface AccordionTaskProps {
  task: Task
}

export const AccordionTask: React.FC<
  AccordionTaskProps
> = ({ task }) => {
  const {
    position,
    name,
    pointEstimate,
    dueDate,
    tags,
    assignee,
  } = task
  return (
    <div className={styles.taskContainer}>
      <NameCell position={position} name={name} />
      <TagCell tags={tags} />
      <EstimateCell pointEstimate={pointEstimate} />
      <AssignNameCell assignee={assignee} />
      <DueDateCell dueDate={dueDate} />
    </div>
  )
}
