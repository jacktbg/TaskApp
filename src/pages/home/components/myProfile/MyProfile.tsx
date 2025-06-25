import styles from "./styles/myProfile.module.scss"
import myProfile from "../../../../assets/myProfile.png"
import { useQuery } from "@apollo/client"
import { GET_PROFILE } from "../../../../services/queries"
import { dueDateFormatter } from "../../utilities/dueDateFormatter"

export const MyProfile = () => {
  const { data, loading, error } = useQuery(GET_PROFILE)
  if (loading) return <p>Loading tasks...</p>
  if (error)
    return <p>Error loading tasks: {error.message}</p>
  const { profile } = data
  return (
    <div className={styles.container}>
      <img
        src={myProfile}
        alt="my profile image"
        className={styles.image}
      />
      <p className={styles.fullName}>{profile.fullName}</p>
      <div className={styles.descriptionContainer}>
        <div className={styles.row}>
          <div className={`${styles.cell1} ${styles.cell}`}>
            Type
          </div>
          <div className={`${styles.cell2} ${styles.cell}`}>
            Full Stack
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.cell1} ${styles.cell}`}>
            Email
          </div>
          <a
            href="mailto:jack.bustinza.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cell2} ${styles.cell} ${styles.link}`}
          >
            jack.bustinza.work@gmail.com
          </a>
        </div>

        <div className={styles.row}>
          <div className={`${styles.cell1} ${styles.cell}`}>
            Github
          </div>
          <a
            href="https://github.com/jacktbg"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cell2} ${styles.cell} ${styles.link}`}
          >
            https://github.com/jacktbg
          </a>
        </div>

        <div className={styles.row}>
          <div className={`${styles.cell1} ${styles.cell}`}>
            Created At
          </div>
          <div className={`${styles.cell2} ${styles.cell}`}>
            {dueDateFormatter(profile.createdAt)}
          </div>
        </div>
      </div>
    </div>
  )
}
