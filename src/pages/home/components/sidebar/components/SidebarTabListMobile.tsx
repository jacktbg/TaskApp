import { PlusButton } from "../../../../../components/PlusButton"
import {
  DashboardIcon,
  MyTaskMobileIcon,
} from "../../../icons/Icons"
import styles from "../styles/sidebarTabListMobile.module.scss"

export const SidebarTabListMobile: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.optionContainer}>
        <div className={styles.iconWrapper}>
          <DashboardIcon className={styles.icon} />
        </div>
        <p className={styles.title}></p>
      </div>
      <PlusButton />
      <div className={styles.optionContainer}>
        <div className={styles.iconWrapper}>
          <MyTaskMobileIcon className={styles.icon} />
        </div>
        <p className={styles.title}></p>
      </div>
    </div>
  )
}
