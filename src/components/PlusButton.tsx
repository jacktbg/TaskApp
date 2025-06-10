import { Dialog, VisuallyHidden } from "radix-ui"
import styles from "../styles/plusButton.module.scss"
import { TaskForm } from "./TaskForm"
import {
  PlusIcon,
  PlusMobileIcon,
} from "../pages/home/icons/Icons"
import { useState } from "react"

export const PlusButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={styles.plusContainer}
          onClick={() => setOpen(true)}
        >
          <PlusIcon className={styles.plus} />
          <div className={styles.plusMobileContainer}>
            <div className={styles.plusMobileWrapper}>
              <PlusMobileIcon
                className={styles.plusMobile}
              />
            </div>
            <p className={styles.title}>Add Project</p>
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content>
          <VisuallyHidden.Root asChild>
            <Dialog.Title>Create Task Tittle</Dialog.Title>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root>
            <Dialog.Description>
              It's a form that lets you create a Task
            </Dialog.Description>
          </VisuallyHidden.Root>
          <TaskForm setOpen={setOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
