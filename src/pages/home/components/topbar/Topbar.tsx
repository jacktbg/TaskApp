import styles from "./styles/topbar.module.scss"
import {
  DashboardIcon,
  MyTaskIcon,
} from "../../icons/Icons"
import { PlusButton } from "../../../../components/PlusButton"
import { useTabStore } from "../../../../store/useStore"

export const Topbar = () => {
  const setActiveTab = useTabStore(
    (state) => state.setActiveTab
  )
  const activeTab = useTabStore((state) => state.activeTab)
  return (
    <section className={styles.container}>
      <button
        className={
          activeTab === "my task"
            ? `${styles.iconWrapper} ${styles.active}`
            : styles.iconWrapper
        }
        onClick={() => setActiveTab("my task")}
      >
        <MyTaskIcon className={styles.icon} />
        <p className={styles.text}>Task</p>
      </button>
      <button
        className={
          activeTab === "dashboard"
            ? `${styles.iconWrapper} ${styles.active}`
            : styles.iconWrapper
        }
        onClick={() => setActiveTab("dashboard")}
      >
        <DashboardIcon className={styles.icon} />
        <p className={styles.text}>Dashboard</p>
      </button>
      <div className={styles.plusButtonWrapper}>
        <PlusButton />
      </div>
    </section>
  )
}
