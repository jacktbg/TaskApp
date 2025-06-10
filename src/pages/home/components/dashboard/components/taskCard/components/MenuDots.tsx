import styles from "../styles/menuDots.module.scss"
import { Popover } from "radix-ui"
import {
  DeleteIcon,
  ThreeDotsIcon,
} from "../../../../../icons/Icons"
import { EditOption } from "./EditOption"
import type { Task } from "../../../../../models/taskProps"
import { useMutation } from "@apollo/client"
import { DELETE_TASK_MUTATION } from "../../../../../../../services/mutations"
import {
  GET_MY_TASK,
  GET_TASKS,
} from "../../../../../../../services/queries"
import { useTabStore } from "../../../../../../../store/useStore"

interface MenuDotsProps {
  task: Task
}

export const MenuDots: React.FC<MenuDotsProps> = ({
  task,
}) => {
  const activeTab = useTabStore((state) => state.activeTab)

  const [deleteTask] = useMutation(DELETE_TASK_MUTATION, {
    variables: { input: { id: task.id } },
    refetchQueries: [
      {
        query:
          activeTab === "all" ? GET_TASKS : GET_MY_TASK,
        variables: {
          input: {},
        },
      },
    ],
    awaitRefetchQueries: true,
    onCompleted: () => {
      console.log("✅ Task deleted")
    },
    onError: (error) => {
      console.error(
        "❌ Error deleting task:",
        error.message
      )
    },
  })

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className={styles.iconWrapper}>
          <ThreeDotsIcon className={styles.icon} />
        </div>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content side={"bottom"} align={"end"}>
          <div className={styles.optionsContainer}>
            <EditOption task={task} />
            <div
              className={styles.option}
              onClick={() => deleteTask()}
            >
              <div className={styles.iconWrapper}>
                <DeleteIcon className={styles.delete} />
              </div>
              <p className={styles.text}>Delete</p>
            </div>
          </div>
          <Popover.Close />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
