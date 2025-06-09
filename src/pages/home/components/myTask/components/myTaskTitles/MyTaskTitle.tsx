import styles from "./styles/myTaskTitle.module.scss"

interface MyTaskTitleProps {
  title: string
  width: string
}

export const MyTaskTitle: React.FC<MyTaskTitleProps> = ({
  title,
  width,
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[width]}`}>
      <h2 className={styles.titles}>{title}</h2>
    </div>
  )
}
