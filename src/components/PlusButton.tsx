import { Dialog, VisuallyHidden } from "radix-ui"
import styles from "../styles/plusButton.module.scss"
import { TaskForm } from "./TaskForm"
import {
  PlusIcon,
  PlusMobileIcon,
} from "../pages/home/icons/Icons"
import { useEffect, useState } from "react"
import { useTabStore } from "../store/useStore"

export const PlusButton: React.FC = () => {
  const activeHighlight = useTabStore(
    (state) => state.activeHighlight
  )
  const setActiveHighlight = useTabStore(
    (state) => state.setActiveHighlight
  )
  const [open, setOpen] = useState<boolean>(false)
  const [isModal, setIsModal] = useState<boolean>(
    window.innerWidth > 900
  )

  useEffect(() => {
    const handleResize = () => {
      setIsModal(window.innerWidth > 900)
    }

    window.addEventListener("resize", handleResize)
    return () =>
      window.removeEventListener("resize", handleResize)
  }, [])
  return (
    <Dialog.Root
      open={open}
      onOpenChange={setOpen}
      modal={isModal}
    >
      <Dialog.Trigger asChild>
        <button
          className={styles.plusContainer}
          onClick={() => setOpen(true)}
        >
          <PlusIcon className={styles.plus} />
          <div
            onClick={() =>
              setActiveHighlight("plus button")
            }
            className={
              activeHighlight === "plus button"
                ? `${styles.plusMobileContainer} ${styles.active}`
                : styles.plusMobileContainer
            }
          >
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
