import styles from "../styles/accordionHeader.module.scss"
import { CollapseArrowIcon } from "../../../../../icons/Icons"
import { Accordion } from "radix-ui"
import { useState } from "react"

interface AccordionHeaderProps {
  title: string
  count: number
}

export const AccordionHeader: React.FC<
  AccordionHeaderProps
> = ({ title, count }) => {
  const [collapse, setCollapse] = useState<boolean>(false)

  const counter = " (" + count + ")"
  return (
    <Accordion.Header asChild>
      <Accordion.Trigger
        className={styles.container}
        onClick={() => setCollapse((prev) => !prev)}
      >
        <div
          className={`${styles.wrapper} ${styles.principal}`}
        >
          <div className={styles.iconWrapper}>
            <CollapseArrowIcon
              className={
                collapse
                  ? `${styles.icon} ${styles.collapse}`
                  : styles.icon
              }
            />
          </div>
          <h3 className={styles.title}>
            {title}
            <span className={styles.counter}>
              {counter}
            </span>
          </h3>
        </div>

        <div
          className={`${styles.wrapper} ${styles.tags}`}
        ></div>
        <div
          className={`${styles.wrapper} ${styles.estimate}`}
        ></div>
        <div
          className={`${styles.wrapper} ${styles.assignee}`}
        ></div>
        <div
          className={`${styles.wrapper} ${styles.dueDate}`}
        ></div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}
