import { PlusButton } from "../../../../../components/PlusButton"
import { useTabStore } from "../../../../../store/useStore"
import {
  DashboardIcon,
  MyTaskMobileIcon,
} from "../../../icons/Icons"
import styles from "../styles/sidebarTabListMobile.module.scss"

export const SidebarTabListMobile: React.FC = () => {
  const setActiveTab = useTabStore(
    (state) => state.setActiveTab
  )
  const activeTab = useTabStore((state) => state.activeTab)
  return (
    <div className={styles.container}>
      <div
        className={
          activeTab === "dashboard"
            ? `${styles.optionContainer} ${styles.active}`
            : styles.optionContainer
        }
        onClick={() => setActiveTab("dashboard")}
      >
        <div className={styles.iconWrapper}>
          <DashboardIcon className={styles.dashboardIcon} />
        </div>
        <p className={styles.title}>Dashboard</p>
      </div>
      <PlusButton />
      <div
        className={
          activeTab === "my task"
            ? `${styles.optionContainer} ${styles.active}`
            : styles.optionContainer
        }
        onClick={() => setActiveTab("my task")}
      >
        <div className={styles.iconWrapper}>
          <MyTaskMobileIcon className={styles.myTaskIcon} />
        </div>
        <p className={styles.title}>My Task</p>
      </div>
    </div>
  )
}
