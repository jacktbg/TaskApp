import styles from "../styles/dueDate.module.scss"
import { DueDateIcon } from "../pages/home/icons/Icons"
import { useState } from "react"
import { DueDateTagOptions } from "./DueDateTagOptions"

export const DueDateTag = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    null
  )
  const [isOpen, setIsOpen] = useState(false)

  const toggleDatePicker = () => setIsOpen(!isOpen)
  return (
    <>
      <button
        className={styles.dueDateButton}
        onClick={toggleDatePicker}
      >
        <div className={styles.iconWrapper}>
          <DueDateIcon className={styles.dueDateIcon} />
        </div>
        <h2 className={styles.label}>
          {startDate
            ? startDate.toLocaleDateString()
            : "Due date"}
        </h2>
      </button>

      {isOpen && (
        <DueDateTagOptions
          startDate={startDate}
          setStartDate={setStartDate}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  )
}
