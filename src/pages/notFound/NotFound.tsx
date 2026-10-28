import styles from "./styles/notFound.module.scss"
import { Link } from "react-router-dom"

export const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Uh, Ohh</h2>
        <div className={styles.linkContainer}>
          <Link to="/" className={styles.link}>
            Sorry, we can’t find what you’re looking for.
            And you need Donovan's permission to stay here.
            <span className={styles.go}> Go!</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
