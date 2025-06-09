import styles from "../styles/reactions.module.scss"
import { ReactionsIcons } from "../../../../ui/ReactionsIcons"
import { ProfileImage } from "../../../../ui/ProfileImage"

interface ReactionsProps {
  avatar: string
}

export const Reactions: React.FC<ReactionsProps> = ({
  avatar,
}) => {
  return (
    <div className={styles.reactions}>
      <ProfileImage avatar={avatar} />
      <ReactionsIcons />
    </div>
  )
}
