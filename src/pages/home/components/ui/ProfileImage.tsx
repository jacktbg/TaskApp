import styles from "./styles/profileImage.module.scss"
import profile from "../../../../assets/profile.png"

interface ProfileImageProps {
  avatar?: string
  className?: string
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  avatar,
  className,
}) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = profile
  }

  return (
    <img
      src={avatar || profile}
      className={`${styles.image} ${className}`}
      alt="assignee to image"
      onError={handleImageError}
    />
  )
}
