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

  const calculateVisibleTags = () => {
    const container = containerRef.current
    if (!container) return

    const children = Array.from(
      container.children
    ) as HTMLDivElement[]
    const containerStyle = getComputedStyle(container)

    const paddingLeft = parseFloat(
      containerStyle.paddingLeft || "0"
    )
    const paddingRight = parseFloat(
      containerStyle.paddingRight || "0"
    )
    const columnGap = parseFloat(
      containerStyle.columnGap || "0"
    )

    const availableWidth =
      container.clientWidth - paddingLeft - paddingRight

    let totalWidth = 0
    let fitCount = tags.length

    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (!child.classList.contains(styles.counter)) {
        totalWidth += child.offsetWidth
        if (i > 0) totalWidth += columnGap

        if (totalWidth > availableWidth) {
          fitCount = i
          break
        }
      }
    }

    setVisibleCount(fitCount)
  }

  useEffect(() => {
    const frameId = requestAnimationFrame(
      calculateVisibleTags
    )
    return () => cancelAnimationFrame(frameId)
  }, [tags])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(
      calculateVisibleTags
    )
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  const hiddenCount = tags.length - visibleCount

  return (
    <div className={styles.container} ref={containerRef}>
      {tags.slice(0, visibleCount).map((tag) => (
        <Tag key={tag} tag={tag} />
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
