import styles from "./styles/topbar.module.scss"
import {
  DashboardIcon,
  MyTaskIcon,
} from "../../icons/Icons"
import { PlusButton } from "../../../../components/PlusButton"

export const Topbar = () => {
  return (
    <section className={styles.container}>
      <button className={styles.iconWrapper}>
        <MyTaskIcon className={styles.icon} />
        <p className={styles.text}>Dashboard</p>
      </button>
      <button
        className={`${styles.iconWrapper} ${styles.active}`}
      >
        <DashboardIcon className={styles.icon} />
        <p className={styles.text}>Task</p>
      </button>
      <div className={styles.plusButtonWrapper}>
        <PlusButton />
      </div>
    </section>
  )
}
