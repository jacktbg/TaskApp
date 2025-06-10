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
        <div className={styles.column1}>
          <div className={styles.cell}>Type</div>
          <div className={styles.cell}>Email</div>
          <div className={styles.cell}>Created At</div>
          <div className={styles.cell}>Updated At</div>
        </div>
        <div className={styles.column2}>
          <div className={styles.cell}>{profile.type}</div>
          <div className={styles.cell}>{profile.email}</div>
          <div className={styles.cell}>
            {dueDateFormatter(profile.createdAt)}
          </div>
          <div className={styles.cell}>
            {dueDateFormatter(profile.updatedAt)}
          </div>
        </div>
      </div>
    </div>
  )
}
