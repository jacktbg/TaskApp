import { Dialog, VisuallyHidden } from "radix-ui"
import styles from "../styles/plusButton.module.scss"
import { TaskForm } from "./TaskForm"
import {
  PlusIcon,
  PlusMobileIcon,
} from "../pages/home/icons/Icons"

export const PlusButton: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.plusContainer}>
          <PlusIcon className={styles.plus} />
          <div className={styles.plusMobileContainer}>
            <PlusMobileIcon className={styles.plusMobile} />
            <p className={styles.text}>Add Project</p>
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
          <TaskForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
