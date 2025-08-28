import { useEffect, useRef, useState } from "react"
import type { TaskTag } from "../../../../../models/taskProps"
import { Tag } from "../../../../ui/Tag"
import styles from "../styles/tags.module.scss"
import { CounterTooltip } from "../../../../myTask/components/myTaskAccordion/components/accordionTask/components/CounterToolTip"

interface TagsProps {
  tags: TaskTag[]
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
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
  }

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      calculateVisibleTags()
    })
    return () => cancelAnimationFrame(id)
  }, [tags])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver(() => {
      calculateVisibleTags()
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const hiddenCount = tags.length - visibleCount

  return (
    <div className={styles.tags} ref={containerRef}>
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
