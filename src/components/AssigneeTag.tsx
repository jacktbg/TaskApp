import styles from "../styles/assignee.module.scss"
import { AssigneeIcon } from "../pages/home/icons/Icons"
import { AssigneeTagOptions } from "./AssigneeTagOptions"
import { useState } from "react"
import { Popover } from "radix-ui"

export const AssigneeTag = () => {
  const [showOptions, setShowOptions] =
    useState<boolean>(false)

  const [value, setValue] = useState<string>("")
  const [image, setImage] = useState<string>("")

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={
            value
              ? `${styles.assigneeButton} ${styles.active}`
              : styles.assigneeButton
          }
          onClick={() => setShowOptions((prev) => !prev)}
        >
          {image ? (
            <img
              className={styles.image}
              src={image}
              alt="profile image"
            />
          ) : (
            <div className={styles.iconWrapper}>
              <AssigneeIcon
                className={styles.assigneeIcon}
              />
            </div>
          )}
          <h2 className={styles.label}>
            {value ? value : "Assignee"}
          </h2>
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <AssigneeTagOptions
            setShowOptions={setShowOptions}
            setValue={setValue}
            setImage={setImage}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
