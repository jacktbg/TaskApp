import { Popover } from "radix-ui"
import { EstimateIcon } from "../pages/home/icons/Icons"
import styles from "../styles/estimateTagOptions.module.scss"

const options: string[] = [
  "0 Points",
  "1 Points",
  "2 Points",
  "4 Points",
  "8 Points",
]

interface EstimateTagOptionsProps {
  setValue: (option: string) => void
}

export const EstimateTagOptions: React.FC<
  EstimateTagOptionsProps
> = ({ setValue }) => {
  return (
    <div className={styles.options}>
      <h3 className={styles.title}>Estimate</h3>
      <ul className={styles.optionsWrapper}>
        {options.map((option, i) => (
          <Popover.Close asChild key={option}>
            <li
              key={i}
              onClick={() => {
                setValue(option)
              }}
              className={styles.option}
            >
              <div className={styles.iconWrapper}>
                <EstimateIcon className={styles.icon} />
              </div>
              <p className={styles.label}>{option}</p>
            </li>
          </Popover.Close>
        ))}
      </ul>
    </div>
  )
}
