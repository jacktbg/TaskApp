import styles from "../styles/dueDateTag.module.scss"
import { DueDateIcon } from "../pages/home/icons/Icons"
import { DueDateTagOptions } from "./DueDateTagOptions"
import { Popover } from "radix-ui"

interface DueDateTagProps {
  date: Date
  setDate: (value: Date | null) => void
}

export const DueDateTag: React.FC<DueDateTagProps> = ({
  date,
  setDate,
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={styles.dueDateButton}>
          <div className={styles.iconWrapper}>
            <DueDateIcon className={styles.dueDateIcon} />
          </div>
          <h2 className={styles.label}>
            {date ? date.toLocaleDateString() : "Due date"}
          </h2>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="bottom">
          <DueDateTagOptions
            startDate={date}
            setStartDate={setDate}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
