import styles from "../../styles/bodyContainer.module.scss"
import { Searchbar } from "../searchbar/Searchbar"
import { Dashboard } from "../dashboard/Dashboard"
import { Topbar } from "../topbar/Topbar"
// import { MyTask } from "../myTask/MyTask"

export const BodyContainer = () => {
  return (
    <div className={styles.bodyContainer}>
      <Searchbar />
      <Topbar />
      <Dashboard />
      {/* <MyTask /> */}
    </div>
  )
}
