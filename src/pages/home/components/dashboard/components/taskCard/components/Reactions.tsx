import styles from "../styles/reactions.module.scss"
import { ReactionsIcons } from "../../../../ui/ReactionsIcons"
import { ProfileImage } from "../../../../ui/ProfileImage"
import type { User } from "../../../../../models/taskProps"

interface ReactionsProps {
  user: User
}

export const Reactions: React.FC<ReactionsProps> = ({
  user,
}) => {
  const { avatar } = user
  return (
    <div className={styles.reactions}>
      <ProfileImage avatar={avatar} />
      <ReactionsIcons />
    </div>
  )
}
