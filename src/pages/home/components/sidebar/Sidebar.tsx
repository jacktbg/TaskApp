import styles from "./styles/sidebar.module.scss"

import { RavnIcon } from "../../icons/Icons"
import { SidebarTabList } from "./components/SidebarTabList"
import { SidebarTabListMobile } from "./components/SidebarTabListMobile"
import { useThemeStore } from "../../../../store/useStore"

export const Sidebar = () => {
  const toggleTheme = useThemeStore(
    (state) => state.toggleTheme
  )
  return (
    <section className={styles.sidebarContainer}>
      <div className={styles.sidebarWrapper}>
        <div
          className={styles.iconWrapper}
          onClick={() => toggleTheme()}
        >
          <RavnIcon className={styles.icon} />
        </div>
        <SidebarTabList />
        <SidebarTabListMobile />
      </div>
    </section>
  )
}
