import { dueDateFormatter } from "../../../../../../../utilities/dueDateFormatter"
import styles from "../styles/dueDateCell.module.scss"
import { CellText } from "./CellText"

interface DueDateCellProps {
  dueDate: string
}

export const DueDateCell: React.FC<DueDateCellProps> = ({
  dueDate,
}) => {
  return (
    <div className={styles.container}>
      <CellText>{dueDateFormatter(dueDate)}</CellText>
    </div>
  )
}
