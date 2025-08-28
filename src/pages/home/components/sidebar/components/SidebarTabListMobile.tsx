import { PlusButton } from "../../../../../components/PlusButton"
import { useTabStore } from "../../../../../store/useStore"
import {
  DashboardIcon,
  MyTaskMobileIcon,
} from "../../../icons/Icons"
import styles from "../styles/sidebarTabListMobile.module.scss"

export const SidebarTabListMobile: React.FC = () => {
  const setActiveHighlight = useTabStore(
    (state) => state.setActiveHighlight
  )
  const activeHighlight = useTabStore(
    (state) => state.activeHighlight
  )
  const setActiveTab = useTabStore(
    (state) => state.setActiveTab
  )
  return (
    <div className={styles.container}>
      <div
        className={
          activeHighlight === "dashboard"
            ? `${styles.optionContainer} ${styles.active}`
            : styles.optionContainer
        }
        onClick={() => {
          setActiveHighlight("dashboard")
          setActiveTab("all")
        }}
      >
        <div className={styles.iconWrapper}>
          <DashboardIcon className={styles.dashboardIcon} />
        </div>
        <p className={styles.title}>Dashboard</p>
      </div>
      <PlusButton />
      <div
        className={
          activeHighlight === "my task"
            ? `${styles.optionContainer} ${styles.active}`
            : styles.optionContainer
        }
        onClick={() => {
          setActiveHighlight("my task")
          setActiveTab("mine")
        }}
      >
        <div className={styles.iconWrapper}>
          <MyTaskMobileIcon className={styles.myTaskIcon} />
        </div>
        <p className={styles.title}>My Task</p>
      </div>
    </div>
  )
}
