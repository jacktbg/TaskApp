import styles from "../styles/menuDots.module.scss"
import { Popover } from "radix-ui"
import {
  DeleteIcon,
  EditIcon,
  ThreeDotsIcon,
} from "../../../../../icons/Icons"

export const MenuDots: React.FC = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className={styles.iconWrapper}>
          <ThreeDotsIcon className={styles.icon} />
        </div>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <div className={styles.optionsContainer}>
            <div className={styles.option}>
              <div className={styles.iconWrapper}>
                <EditIcon className={styles.edit} />
              </div>
              <p>Edit</p>
            </div>
            <div className={styles.option}>
              <div className={styles.iconWrapper}>
                <DeleteIcon className={styles.delete} />
              </div>
              <p>Delete</p>
            </div>
          </div>
          <Popover.Close />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
