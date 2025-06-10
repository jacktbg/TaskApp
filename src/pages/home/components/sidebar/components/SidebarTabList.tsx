import styles from "../styles/sidebarTabList.module.scss"
import {
  DashboardIcon,
  MyTaskIcon,
  ProfileIcon,
} from "../../../icons/Icons"
import { SidebarTab } from "./SidebarTab"
import { useTabStore } from "../../../../../store/useStore"

const options = [
  {
    component: <DashboardIcon className={styles.icon} />,
    text: "dashboard",
  },
  {
    component: <MyTaskIcon className={styles.icon} />,
    text: "my task",
  },
  {
    component: <ProfileIcon className={styles.icon} />,
    text: "my profile",
  },
] as const

type Highlight = (typeof options)[number]["text"]

export const SidebarTabList = () => {
  const setActiveHighlight = useTabStore(
    (state) => state.setActiveHighlight
  )
  const activeHighlight = useTabStore(
    (state) => state.activeHighlight
  )
  const setActiveTab = useTabStore(
    (state) => state.setActiveTab
  )
  const setActiveComponent = useTabStore(
    (state) => state.setActiveComponent
  )

  return (
    <div className={styles.sidebarTabListContainer}>
      {options.map((o, i) => (
        <SidebarTab
          key={i}
          component={o.component}
          text={o.text}
          isActive={activeHighlight === o.text}
          onClick={() => {
            const text = o.text as Highlight

            setActiveHighlight(text)
            setActiveTab(
              text === "dashboard" ? "all" : "mine"
            )
            if (text === "my profile") {
              setActiveComponent(text)
            } else {
              setActiveComponent("dashboard")
            }
          }}
        />
      ))}
    </div>
  )
}
