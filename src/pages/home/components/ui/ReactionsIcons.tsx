import { useMemo } from "react"
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
  const { showClip, threadCount, messageCount } =
    useMemo(() => {
      return {
        showClip: Math.random() > 0.5,
        threadCount: Math.floor(Math.random() * 10),
        messageCount: Math.floor(Math.random() * 10),
      }
    }, [])

  return (
    <div
      className={`${styles.iconsContainer} ${classname}`}
    >
      <div className={styles.iconWrapper}>
        {showClip && <ClipIcon className={styles.clip} />}
      </div>
      <div className={styles.wrapper}>
        <p>{threadCount}</p>
        <div className={styles.iconWrapper}>
          <ThreadIcon className={styles.thread} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p>{messageCount}</p>
        <div className={styles.iconWrapper}>
          <MessageIcon className={styles.message} />
        </div>
      </div>
    </div>
  )
}
