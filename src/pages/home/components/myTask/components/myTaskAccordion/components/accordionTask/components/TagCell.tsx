import { useEffect, useRef, useState } from "react"
import type { TaskTag } from "../../../../../../../models/taskProps"
import { Tag } from "../../../../../../ui/Tag"
import styles from "../styles/tagCell.module.scss"
import { CounterTooltip } from "./CounterToolTip"

interface TagCellProps {
  tags: TaskTag[]
}

export const TagCell: React.FC<TagCellProps> = ({
  tags,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(
    tags.length
  )

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const children = Array.from(
      container.children
    ) as HTMLDivElement[]

    let totalWidth = 0
    const containerWidth = container.clientWidth
    let fitCount = tags.length

    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (!child.classList.contains(styles.counter)) {
        const style = getComputedStyle(child)
        const marginRight = parseFloat(
          style.marginRight || "0"
        )
        totalWidth += child.offsetWidth + marginRight

        if (totalWidth > containerWidth) {
          fitCount = i
          break
        }
      }
    }

    setVisibleCount(fitCount)
  }, [tags])

  const hiddenCount = tags.length - visibleCount

  return (
    <div className={styles.container} ref={containerRef}>
      {tags.slice(0, visibleCount).map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}

      {hiddenCount > 0 && (
        <CounterTooltip
          hiddenCount={hiddenCount}
          tags={tags.slice(visibleCount)}
        />
      )}
    </div>
  )
}
