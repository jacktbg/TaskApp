import styles from "../../styles/bodyContainer.module.scss"
import { Searchbar } from "../searchbar/Searchbar"
import { Dashboard } from "../dashboard/Dashboard"
import { Topbar } from "../topbar/Topbar"
import { MyTask } from "../myTask/MyTask"
import { useTabStore } from "../../../../store/useStore"
import { MyProfile } from "../myProfile/MyProfile"

export const BodyContainer = () => {
  const activeComponent = useTabStore(
    (state) => state.activeComponent
  )

  return (
    <div className={styles.bodyContainer}>
      <Searchbar />
      <Topbar />
      {activeComponent === "dashboard" ? (
        <Dashboard />
      ) : activeComponent === "my task" ? (
        <MyTask />
      ) : (
        <MyProfile />
      )}
    </div>
  )
}
