import styles from "../../styles/bodyContainer.module.scss"
import { Searchbar } from "../searchbar/Searchbar"
import { Dashboard } from "../dashboard/Dashboard"
import { Topbar } from "../topbar/Topbar"
import { MyTask } from "../myTask/MyTask"
import { useTabStore } from "../../../../store/useStore"

export const BodyContainer = () => {
  const activeTab = useTabStore((state) => state.activeTab)

  return (
    <div className={styles.bodyContainer}>
      <Searchbar />
      <Topbar />
      {activeTab === "dashboard" ? (
        <Dashboard />
      ) : (
        <MyTask />
      )}
    </div>
  )
}
