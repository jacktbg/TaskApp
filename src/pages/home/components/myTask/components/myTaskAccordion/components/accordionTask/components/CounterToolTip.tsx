import { Tooltip } from "radix-ui"
import styles from "../styles/counterToolTip.module.scss"
import { CellText } from "./CellText"
import type { TaskTag } from "../../../../../../../models/taskProps"
import { Tag } from "../../../../../../ui/Tag"

interface CounterTooltip {
  hiddenCount: number
  tags: TaskTag[]
}

export const CounterTooltip: React.FC<CounterTooltip> = ({
  hiddenCount,
  tags,
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className={styles.counter}>
            <CellText className={styles.bold}>
              +{hiddenCount}
            </CellText>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5}>
            <div className={styles.content}>
              {tags.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div>
            <Tooltip.Arrow className={styles.arrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
