import styles from "../styles/editOption.module.scss"
import { EditIcon } from "../../../../../icons/Icons"
import { Dialog, VisuallyHidden } from "radix-ui"
import { useState } from "react"
import { TaskForm } from "../../../../../../../components/TaskForm"
import type { Task } from "../../../../../models/taskProps"
import { useTaskStore } from "../../../../../../../store/useStore"

interface EditOptionProps {
  task: Task
}

export const EditOption: React.FC<EditOptionProps> = ({
  task,
}) => {
  const setTask = useTaskStore((state) => state.setTask)
  const clearTask = useTaskStore((state) => state.clearTask)
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen)
        if (!isOpen) {
          clearTask()
        }
      }}
    >
      <Dialog.Trigger asChild>
        <div
          className={styles.option}
          onClick={() => setTask(task, "edit")}
        >
          <div className={styles.iconWrapper}>
            <EditIcon className={styles.edit} />
          </div>
          <p className={styles.text}>Edit</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content>
          <VisuallyHidden.Root asChild>
            <Dialog.Title>Update Task Tittle</Dialog.Title>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root>
            <Dialog.Description>
              It's a form that lets you Update a Task
            </Dialog.Description>
          </VisuallyHidden.Root>
          <TaskForm setOpen={setOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
