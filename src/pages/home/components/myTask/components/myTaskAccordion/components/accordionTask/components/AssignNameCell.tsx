import styles from "../styles/assignNameCell.module.scss"
import type { User } from "../../../../../../../models/taskProps"
import { CellText } from "./CellText"
import { ProfileImage } from "../../../../../../ui/ProfileImage"

interface AssignNameCellProps {
  assignee: User
}

export const AssignNameCell: React.FC<
  AssignNameCellProps
> = ({ assignee }) => {
  const { avatar, fullName } = assignee
  return (
    <div className={styles.container}>
      <ProfileImage avatar={avatar} />
      <CellText>{fullName + "asfasfas"}</CellText>
    </div>
  )
}
