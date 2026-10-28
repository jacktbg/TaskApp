import { getDueDateStatus } from "../../../../../../../utilities/getDueDateStatus"
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
  const dueDateClass = styles[getDueDateStatus(dueDate)]

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
