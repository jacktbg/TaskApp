import styles from "../styles/estimateTag.module.scss"
import { Popover } from "radix-ui"
import { EstimateIcon } from "../pages/home/icons/Icons"
import { EstimateTagOptions } from "./EstimateTagOptions"
import { useEffect, useState } from "react"
import { useTaskStore } from "../store/useStore"
import { pointEstimateFormatter } from "../pages/home/utilities/pointEstimateFormatter"

interface EstimateTagProps {
  estimate: string
  setEstimate: (value: string) => void
}

export const EstimateTag: React.FC<EstimateTagProps> = ({
  estimate,
  setEstimate,
}) => {
  const task = useTaskStore((state) => state.currentTask)
  const [label, setLabel] = useState<string>("")
  useEffect(() => {
    if (task) {
      const formatted = pointEstimateFormatter(
        task.pointEstimate
      )
      setLabel(`${formatted} Points`)
    }
  }, [task]) // React to changes in pointEstimate

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className={
            estimate || label
              ? `${styles.estimateButton} ${styles.active}`
              : styles.estimateButton
          }
        >
          <div className={styles.iconWrapper}>
            <EstimateIcon className={styles.estimateIcon} />
          </div>
          <h2 className={styles.label}>
            {label || "Estimate"}
          </h2>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="bottom">
          <EstimateTagOptions
            setEstimate={(option) => {
              setEstimate(option)
            }}
            setLabel={(option) => {
              setLabel(option)
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
