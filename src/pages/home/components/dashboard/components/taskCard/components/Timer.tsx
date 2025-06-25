import { TimeIcon } from "../../../../../icons/Icons"
import { dueDateFormatter } from "../../../../../utilities/dueDateFormatter"
import { pointEstimateFormatter } from "../../../../../utilities/pointEstimateFormatter"
import styles from "../styles/timer.module.scss"

interface TimerProps {
  pointEstimate: string
  dueDate: string
}

export const Timer: React.FC<TimerProps> = ({
  pointEstimate,
  dueDate,
}) => {
  const getDueDateStatus = (dueDate: string): string => {
    const due = new Date(dueDate)
    const now = new Date()

    // Strip time for accurate date comparison
    due.setHours(0, 0, 0, 0)
    now.setHours(0, 0, 0, 0)

    const diffMs = due.getTime() - now.getTime()
    const diffDays = diffMs / (1000 * 60 * 60 * 24)

    if (diffDays < 0) return styles.late
    if (diffDays <= 2) return styles.warning
    return styles.ontime
  }

  const dueDateClass = getDueDateStatus(dueDate)

  return (
    <div className={styles.timer}>
      <p className={styles.points}>
        {pointEstimateFormatter(pointEstimate) + " Points"}
      </p>
      <div
        className={`${styles.dueDateContainer} ${dueDateClass}`}
      >
        <div className={styles.iconWrapper}>
          <TimeIcon
            className={`${styles.icon} ${dueDateClass}`}
          />
        </div>
        <p className={`${styles.dueDate} ${dueDateClass}`}>
          {dueDateFormatter(dueDate)}
        </p>
      </div>
    </div>
  )
}
