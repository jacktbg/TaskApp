import { getDueDateStatus } from "../../../../../../../../../utilities/getDueDateStatus"
import { ReactionsIcons } from "../../../../../../ui/ReactionsIcons"
import styles from "../styles/nameCell.module.scss"
import { CellText } from "./CellText"

interface NameCellProps {
  dueDate: string
  position?: number
  name: string
}
const positionFormatter = (position?: number) =>
  String(position ?? "").padStart(2, "0")

export const NameCell: React.FC<NameCellProps> = ({
  dueDate,
  position,
  name,
}) => {
  const dueDateClass = styles[getDueDateStatus(dueDate)]
  console.log(dueDateClass)
  return (
    <div className={styles.container}>
      <div className={styles.rectangleWrapper}>
        <div
          className={`${styles.rectangle} ${dueDateClass}`}
        ></div>
      </div>
      <CellText>{positionFormatter(position)}</CellText>
      <CellText>{name}</CellText>
      <ReactionsIcons classname={styles.reactions} />
    </div>
  )
}
