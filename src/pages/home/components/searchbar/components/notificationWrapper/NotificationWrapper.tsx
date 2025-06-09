import styles from "../../styles/notificationWrapper.module.scss"
import { BellIcon } from "../../../../icons/Icons"
import { ProfileImage } from "../../../ui/ProfileImage"

export const NotificationWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <BellIcon className={styles.icon} />
      <ProfileImage className={styles.image} />
    </div>
  )
}
