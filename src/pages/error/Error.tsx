import type { FallbackProps } from "react-error-boundary"
import { Link } from "react-router-dom"
import styles from "./styles/error.module.scss"

export const Error = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div className={styles.notFound}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Something went wrong
        </h1>
        <h2 className={styles.subtitle}>{error.message}</h2>
        <div className={styles.linkContainer}>
          <Link
            onClick={resetErrorBoundary}
            to="/"
            className={styles.link}
          >
            go back
            <span className={styles.go}> Home!</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
