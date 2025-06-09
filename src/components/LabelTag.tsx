import styles from "../styles/labelTag.module.scss"
import { LabelIcon } from "../pages/home/icons/Icons"
import { useState } from "react"
import { LabelTagOptions } from "./LabelTagOptions"

export const LabelTag = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [value, setValue] = useState<string[]>([])

  const toggleOption = (option: string) => {
    setValue((prev) =>
      prev.includes(option)
        ? prev.filter((tag) => tag !== option)
        : [...prev, option]
    )
  }

  return (
    <>
      <button
        className={
          value.length
            ? `${styles.labelButton} ${styles.active}`
            : styles.labelButton
        }
        onClick={() => setShowOptions((prev) => !prev)}
      >
        {!value.length && (
          <div className={styles.iconWrapper}>
            <LabelIcon className={styles.labelIcon} />
          </div>
        )}
        <h2
          className={
            value.length
              ? `${styles.label} ${styles.active}`
              : styles.label
          }
        >
          {value.length > 0 ? value.join("|") : "Label"}
        </h2>
      </button>

      {showOptions && (
        <LabelTagOptions
          value={value}
          setValue={toggleOption}
        />
      )}
    </>
  )
}
