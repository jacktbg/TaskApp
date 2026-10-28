import { useState } from "react"
import { CancelIcon } from "../../icons/Icons"
import styles from "./styles/searchbar.module.scss"
import { InputWrapper } from "./components/InputWrapper"
import { NotificationWrapper } from "./components/NotificationWrapper"
import { useSearchFormStore } from "../../../../store/useStore"

export const Searchbar = () => {
  const [focus, setFocus] = useState<boolean>(false)
  const reset = useSearchFormStore((state) => state.reset)
  return (
    <section className={styles.searchbarContainer}>
      <div className={styles.searchbarWrapper}>
        <InputWrapper setFocus={setFocus} focus={focus} />

        {focus ? (
          <div
            className={styles.iconWrapper}
            onMouseDown={() => {
              reset()
            }}
          >
            <CancelIcon className={styles.icon} />
          </div>
        ) : null}
        <NotificationWrapper />
      </div>
    </section>
  )
}
