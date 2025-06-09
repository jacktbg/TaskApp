import styles from "./styles/sidebar.module.scss"

import { RavnIcon } from "../../icons/Icons"
import { SidebarTabList } from "./components/SidebarTabList"
import { SidebarTabListMobile } from "./components/SidebarTabListMobile"

export const Sidebar = () => {
  return (
    <section className={styles.sidebarContainer}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.iconWrapper}>
          <RavnIcon className={styles.icon} />
        </div>
        <SidebarTabList />
        <SidebarTabListMobile />
      </div>
    </section>
  )
}
