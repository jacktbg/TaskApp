import styles from "../styles/labelTag.module.scss"
import { LabelIcon } from "../pages/home/icons/Icons"
import { LabelTagOptions } from "./LabelTagOptions"
import { Popover } from "radix-ui"

interface LabelTagProps {
  label: string[]
  setLabel: (value: string[]) => void
}

export const LabelTag: React.FC<LabelTagProps> = ({
  label,
  setLabel,
}) => {
  const toggleOption = (option: string) => {
    const updated = label.includes(option)
      ? label.filter((tag) => tag !== option)
      : [...label, option]

    setLabel(updated)
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={
            label.length
              ? `${styles.labelButton} ${styles.active}`
              : styles.labelButton
          }
        >
          {!label.length && (
            <div className={styles.iconWrapper}>
              <LabelIcon className={styles.labelIcon} />
            </div>
          )}
          <h2
            className={
              label.length
                ? `${styles.label} ${styles.active}`
                : styles.label
            }
          >
            {label.length > 0 ? label.join("|") : "Label"}
          </h2>
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <LabelTagOptions
            label={label}
            setLabel={toggleOption}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
