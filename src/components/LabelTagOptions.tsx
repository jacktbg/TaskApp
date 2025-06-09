import styles from "../styles/labelTagOptions.module.scss"
import type { TaskTag } from "../pages/home/models/taskProps"

const options: TaskTag[] = [
  "ANDROID",
  "IOS",
  "NODE_JS",
  "RAILS",
  "REACT",
]

interface LabelTagOptionsProps {
  value: string[]
  setValue: (option: string) => void
}

export const LabelTagOptions: React.FC<
  LabelTagOptionsProps
> = ({ value, setValue }) => {
  return (
    <div className={styles.options}>
      <h3 className={styles.title}>Tag Title</h3>
      <ul className={styles.optionsWrapper}>
        {options.map((option, i) => (
          <li key={i} className={styles.option}>
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => setValue(option)}
              id={`tag-${option}`}
            />
            <label
              className={styles.label}
              htmlFor={`tag-${option}`}
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
