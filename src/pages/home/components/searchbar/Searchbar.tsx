import { useState } from "react"
import { CancelIcon } from "../../icons/Icons"
import styles from "./styles/searchbar.module.scss"
import { InputWrapper } from "./components/InputWrapper"
import { NotificationWrapper } from "./components/NotificationWrapper"

export const Searchbar = () => {
  const [focus, setFocus] = useState<boolean>(false)
  return (
    <section className={styles.searchbarContainer}>
      <div className={styles.searchbarWrapper}>
        <InputWrapper setFocus={setFocus} />

        {focus ? (
          <div className={styles.iconWrapper}>
            <CancelIcon className={styles.icon} />
          </div>
        ) : null}
        <NotificationWrapper />
      </div>
    </section>
  )
}
