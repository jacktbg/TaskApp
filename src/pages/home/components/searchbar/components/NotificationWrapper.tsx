import styles from "../styles/notificationWrapper.module.scss"
import { BellIcon } from "../../../icons/Icons"
import { ProfileImage } from "../../ui/ProfileImage"
import { useTabStore } from "../../../../../store/useStore"
import myProfile from "../../../../../assets/myProfile.png"

export const NotificationWrapper = () => {
  const setComponent = useTabStore(
    (state) => state.setActiveComponent
  )
  return (
    <div className={styles.wrapper}>
      <BellIcon className={styles.icon} />
      <div
        className={styles.profileWrapper}
        onClick={() => setComponent("my profile")}
      >
        <ProfileImage
          avatar={myProfile}
          className={styles.image}
        />
      </div>
    </div>
  )
}
