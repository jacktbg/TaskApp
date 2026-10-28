import styles from "../styles/assigneeTagOptions.module.scss"
import profile from "../assets/profile.png"
import { Popover } from "radix-ui"
import { useQuery } from "@apollo/client"
import { GET_USERS } from "../services/queries"
import type { User } from "../pages/home/models/taskProps"
import { ProfileImage } from "../pages/home/components/ui/ProfileImage"

interface AssigneeTagOptionsProps {
  setAssigneeId: (value: string) => void
  setImage: (option: string) => void
  setName: (option: string) => void
}

export const AssigneeTagOptions: React.FC<
  AssigneeTagOptionsProps
> = ({ setAssigneeId, setImage, setName }) => {
  const { data, loading, error } = useQuery(GET_USERS, {
    variables: {
      input: {},
    },
  })

  if (loading) return <p>Loading Users...</p>
  if (error)
    return <p>Error loading Users: {error.message}</p>

  const users: User[] = data?.users ?? []
  return (
    <div className={styles.options}>
      <h3 className={styles.title}>Assign too</h3>
      <ul className={styles.optionsWrapper}>
        {users.map((user) => (
          <Popover.Close key={user.id} asChild>
            <li
              onClick={() => {
                setAssigneeId(user.id ? user.id : "error")
                setName(
                  user.fullName ? user.fullName : "error"
                )
                setImage(
                  user.avatar ? user.avatar : profile
                )
              }}
              className={styles.option}
            >
              <ProfileImage avatar={user.avatar} />
              <p className={styles.label}>
                {user.fullName}
              </p>
            </li>
          </Popover.Close>
        ))}
      </ul>
    </div>
  )
}
