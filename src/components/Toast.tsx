import { useToastStore } from "../store/useStore"
import styles from "../styles/toast.module.scss"
import { useEffect } from "react"

export const Toast = () => {
  const { message, hideToast } = useToastStore()

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        hideToast()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [message, hideToast])

  if (!message) return null

  return <div className={styles.toast}>{message}</div>
}
