import styles from "../styles/assigneeTag.module.scss"
import { AssigneeIcon } from "../pages/home/icons/Icons"
import { AssigneeTagOptions } from "./AssigneeTagOptions"
import { useEffect, useState } from "react"
import { Popover } from "radix-ui"
import { useTaskStore } from "../store/useStore"
import { ProfileImage } from "../pages/home/components/ui/ProfileImage"

interface AssigneeTagProps {
  assigneeId: string
  setAssigneeId: (value: string) => void
}

export const AssigneeTag: React.FC<AssigneeTagProps> = ({
  assigneeId,
  setAssigneeId,
}) => {
  const task = useTaskStore((state) => state.currentTask)

  const [image, setImage] = useState<string | undefined>("")
  const [name, setName] = useState<string | undefined>("")

  useEffect(() => {
    if (task) {
      setName(task.assignee.fullName)
      setImage(task.assignee.avatar)
    }
  }, [task])

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={
            assigneeId || name
              ? `${styles.assigneeButton} ${styles.active}`
              : styles.assigneeButton
          }
        >
          {image ? (
            <ProfileImage avatar={image} />
          ) : (
            <div className={styles.iconWrapper}>
              <AssigneeIcon
                className={styles.assigneeIcon}
              />
            </div>
          )}
          <h2 className={styles.label}>
            {name ? name : "Assignee"}
          </h2>
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="end"
          sideOffset={8}
          alignOffset={-100}
        >
          <AssigneeTagOptions
            setAssigneeId={setAssigneeId}
            setName={setName}
            setImage={setImage}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
