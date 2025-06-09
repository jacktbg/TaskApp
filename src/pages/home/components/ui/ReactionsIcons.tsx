import styles from "./styles/reactionsIcons.module.scss"
import {
  ClipIcon,
  MessageIcon,
  ThreadIcon,
} from "../../icons/Icons"

interface ReactionsIconsProps {
  classname?: string
}

export const ReactionsIcons: React.FC<
  ReactionsIconsProps
> = ({ classname }) => {
  return (
    <div
      className={`${styles.iconsContainer} ${classname}`}
    >
      <div className={styles.iconWrapper}>
        <ClipIcon className={styles.clip} />
      </div>
      <div className={styles.wrapper}>
        <p>5</p>
        <div className={styles.iconWrapper}>
          <ThreadIcon className={styles.thread} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p>3</p>
        <div className={styles.iconWrapper}>
          <MessageIcon className={styles.message} />
        </div>
      </div>
    </div>
  )
}
