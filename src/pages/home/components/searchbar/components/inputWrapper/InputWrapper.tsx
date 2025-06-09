import { SearchIcon } from "../../../../icons/Icons"
import styles from "../../styles/inputWrapper.module.scss"
export const InputWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <SearchIcon className={styles.icon} />
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
      />
    </div>
  )
}
