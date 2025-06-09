import styles from "../styles/accordionHeader.module.scss"
import { CollapseArrowIcon } from "../../../../../icons/Icons"
import { Accordion } from "radix-ui"

interface AccordionHeaderProps {
  title: string
}

export const AccordionHeader: React.FC<
  AccordionHeaderProps
> = ({ title }) => {
  const counter = " (03)"
  return (
    <Accordion.Header asChild>
      <Accordion.Trigger className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <CollapseArrowIcon className={styles.icon} />
        </div>
        <h3 className={styles.title}>
          {title}
          <span className={styles.counter}>{counter}</span>
        </h3>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}
