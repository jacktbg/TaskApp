import styles from "../styles/taskForm.module.scss"
import { AssigneeTag } from "./AssigneeTag"
import { DueDateTag } from "./DueDateTag"
import { EstimateTag } from "./EstimateTag"
import { LabelTag } from "./LabelTag"
import { Dialog } from "radix-ui"

export const TaskForm: React.FC = () => {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.name}
        placeholder="Task Title"
      />
      <div className={styles.tags}>
        <EstimateTag />
        <AssigneeTag />
        <LabelTag />
        <DueDateTag />
      </div>
      <div className={styles.buttons}>
        <Dialog.Close asChild>
          <button type="button" className={styles.cancel}>
            Cancel
          </button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <button className={styles.create}>Create</button>
        </Dialog.Close>
      </div>
    </form>
  )
}
