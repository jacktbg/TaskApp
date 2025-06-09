import { BodyContainer } from "./components/bodyContainer/BodyContainer"
import { Sidebar } from "./components/sidebar/Sidebar"
import styles from "./styles/home.module.scss"

export const Home: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <BodyContainer />
    </div>
  )
}
