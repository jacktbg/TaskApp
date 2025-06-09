import styles from "../styles/sidebarTabList.module.scss"
import type { SidebarTabProps } from "../models/sidebarTabProps"

export const SidebarTab: React.FC<SidebarTabProps> = ({
  component,
  text,
}) => {
  return (
    <div className={styles.sidebarTabWrapper}>
      <div className={styles.iconWrapper}>{component}</div>
      <h2 className={styles.text}>{text}</h2>
      <div className={styles.rectangle}></div>
    </div>
  )
}
