import styles from "../styles/cellText.module.scss"
import type { ReactNode } from "react"

interface CellTextProps {
  children: ReactNode
  className?: string
}

export const CellText: React.FC<CellTextProps> = ({
  children,
  className,
}) => {
  return (
    <p className={`${styles.text} ${className}`}>
      {children}
    </p>
  )
}
