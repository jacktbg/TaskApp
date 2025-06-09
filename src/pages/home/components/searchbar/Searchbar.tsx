import { CancelIcon } from "../../icons/Icons"
import { InputWrapper } from "./components/inputWrapper/InputWrapper"
import { NotificationWrapper } from "./components/notificationWrapper/NotificationWrapper"
import styles from "./styles/searchbar.module.scss"

export const Searchbar = () => {
  return (
    <section className={styles.searchbarContainer}>
      <div className={styles.searchbarWrapper}>
        <InputWrapper />
        <div className={styles.iconWrapper}>
          <CancelIcon className={styles.icon} />
        </div>
        <NotificationWrapper />
      </div>
    </section>
  )
}
