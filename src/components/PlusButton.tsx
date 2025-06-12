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
      <Dialog.Portal container={document.body}>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content>
          <TaskForm setOpen={setOpen} />
          <VisuallyHidden.Root
            className={styles.titleRadix}
            asChild
          >
            <Dialog.Title>Create Task Tittle</Dialog.Title>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root
            className={styles.descriptionRadix}
          >
            <Dialog.Description
              className={styles.descriptionRadix}
            >
              It's a form that lets you create a Task
            </Dialog.Description>
          </VisuallyHidden.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
