import { Toast } from "../../components/Toast"
import { BodyContainer } from "./components/bodyContainer/BodyContainer"
import { Sidebar } from "./components/sidebar/Sidebar"
import styles from "./styles/home.module.scss"

export const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Sidebar />
      <BodyContainer />
      <Toast />
    </div>
  )
}
