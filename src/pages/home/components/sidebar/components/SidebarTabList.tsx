import styles from "../styles/sidebarTabList.module.scss"
import type { SidebarTabProps } from "../models/sidebarTabProps"
import {
  DashboardIcon,
  MyTaskIcon,
} from "../../../icons/Icons"
import { SidebarTab } from "./SidebarTab"
import { useTabStore } from "../../../../../store/useStore"

const options: SidebarTabProps[] = [
  {
    component: <DashboardIcon className={styles.icon} />,
    text: "dashboard",
  },
  {
    component: <MyTaskIcon className={styles.icon} />,
    text: "my task",
  },
]

export const SidebarTabList = () => {
  const setActiveTab = useTabStore(
    (state) => state.setActiveTab
  )
  const activeTab = useTabStore((state) => state.activeTab)

  return (
    <div className={styles.sidebarTabListContainer}>
      {options.map((o, i) => (
        <SidebarTab
          key={i}
          component={o.component}
          text={o.text}
          isActive={activeTab === o.text}
          onClick={() =>
            setActiveTab(o.text as "dashboard" | "my task")
          }
        />
      ))}
    </div>
  )
}
