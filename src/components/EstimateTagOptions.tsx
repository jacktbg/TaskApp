import { Popover } from "radix-ui"
import { EstimateIcon } from "../pages/home/icons/Icons"
import styles from "../styles/estimateTagOptions.module.scss"
import type { PointEstimate } from "../pages/home/models/taskProps"

const options: { label: string; value: PointEstimate }[] = [
  { label: "0 Points", value: "ZERO" },
  { label: "1 Points", value: "ONE" },
  { label: "2 Points", value: "TWO" },
  { label: "4 Points", value: "FOUR" },
  { label: "8 Points", value: "EIGHT" },
]

interface EstimateTagOptionsProps {
  setEstimate: (option: PointEstimate) => void
  setLabel: (option: string) => void
}

export const EstimateTagOptions: React.FC<
  EstimateTagOptionsProps
> = ({ setEstimate, setLabel }) => {
  return (
    <div className={styles.options}>
      <h3 className={styles.title}>Estimate</h3>
      <ul className={styles.optionsWrapper}>
        {options.map(({ label, value }) => (
          <Popover.Close asChild key={value}>
            <li
              onClick={() => {
                setEstimate(value)
                setLabel(label)
              }}
              className={styles.option}
            >
              <div className={styles.iconWrapper}>
                <EstimateIcon className={styles.icon} />
              </div>
              <p className={styles.label}>{label}</p>
            </li>
          </Popover.Close>
        ))}
      </ul>
    </div>
  )
}
