import styles from "./styles/topbar.module.scss"
import {
  DashboardIcon,
  MyTaskIcon,
} from "../../icons/Icons"
import { PlusButton } from "../../../../components/PlusButton"
import { useTabStore } from "../../../../store/useStore"

export const Topbar = () => {
  const setActiveComponent = useTabStore(
    (state) => state.setActiveComponent
  )
  const activeComponent = useTabStore(
    (state) => state.activeComponent
  )
  return (
    <section className={styles.container}>
      <button
        className={
          activeComponent === "my task"
            ? `${styles.iconWrapper} ${styles.active}`
            : styles.iconWrapper
        }
        onClick={() => setActiveComponent("my task")}
      >
        <MyTaskIcon className={styles.icon} />
        <p className={styles.text}>Task</p>
      </button>
      <button
        className={
          activeComponent === "dashboard"
            ? `${styles.iconWrapper} ${styles.active}`
            : styles.iconWrapper
        }
        onClick={() => setActiveComponent("dashboard")}
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
