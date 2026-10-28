import styles from "../styles/estimateCell.module.scss"
import { pointEstimateFormatter } from "../../../../../../../utilities/pointEstimateFormatter"
import { CellText } from "./CellText"

interface EstimateCellProps {
  pointEstimate: string
}

export const EstimateCell: React.FC<EstimateCellProps> = ({
  pointEstimate,
}) => {
  return (
    <div className={styles.container}>
      <CellText>
        {pointEstimateFormatter(pointEstimate)} Points
      </CellText>
    </div>
  )
}
