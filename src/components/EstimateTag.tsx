import styles from "../styles/estimateTag.module.scss"
import { Popover } from "radix-ui"
import { EstimateIcon } from "../pages/home/icons/Icons"
import { EstimateTagOptions } from "./EstimateTagOptions"
import { useState } from "react"

export const EstimateTag = () => {
  const [value, setValue] = useState<string>("")

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={
            value
              ? `${styles.estimateButton} ${styles.active}`
              : styles.estimateButton
          }
        >
          <div className={styles.iconWrapper}>
            <EstimateIcon className={styles.estimateIcon} />
          </div>
          <h2 className={styles.label}>
            {value || "Estimate"}
          </h2>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="bottom">
          <EstimateTagOptions
            setValue={(option) => {
              setValue(option)
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
