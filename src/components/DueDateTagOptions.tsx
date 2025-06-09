import styles from "../styles/dueDateOptions.module.scss"
import DatePicker from "react-datepicker"
import { format } from "date-fns"
import {
  ArrowIcon,
  DoubleArrowIcon,
} from "../pages/home/icons/Icons"

interface DueDateTagOptions {
  startDate: Date | null
  setStartDate: (date: Date | null) => void
  setIsOpen: (boolean: boolean) => void
}

export const DueDateTagOptions: React.FC<
  DueDateTagOptions
> = ({ startDate, setStartDate, setIsOpen }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date)
        setIsOpen(false)
      }}
      todayButton="Today"
      calendarClassName={styles["wrapper"]}
      inline
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={styles["custom-header"]}>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className={`${styles["nav-button"]} ${styles["prev-button"]}`}
          >
            <div className={styles.iconWrapper}>
              <DoubleArrowIcon
                className={styles.doubleArrowIcon}
              />
            </div>
            <div className={styles.iconWrapper}>
              <ArrowIcon className={styles.arrowIcon} />
            </div>
          </button>
          <span className={styles["current-month"]}>
            {format(date, "MMM yyyy")}
          </span>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className={styles["nav-button"]}
          >
            <div className={styles.iconWrapper}>
              <ArrowIcon className={styles.arrowIcon} />
            </div>
            <div className={styles.iconWrapper}>
              <DoubleArrowIcon
                className={styles.doubleArrowIcon}
              />
            </div>
          </button>
        </div>
      )}
    />
  )
}
