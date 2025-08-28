import styles from "../styles/sidebarTabList.module.scss"
interface SidebarTabProps {
  component: React.ReactNode
  text: string
  isActive?: boolean
  onClick?: () => void
}
export const SidebarTab: React.FC<SidebarTabProps> = ({
  component,
  text,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={
        isActive
          ? `${styles.sidebarTabWrapper} ${styles.active}`
          : styles.sidebarTabWrapper
      }
    >
      <div className={styles.iconWrapper}>{component}</div>
      <h2 className={styles.text}>{text}</h2>
      <div
        className={
          isActive
            ? `${styles.rectangle} ${styles.show}`
            : styles.rectangle
        }
      ></div>
    </div>
  )
}
