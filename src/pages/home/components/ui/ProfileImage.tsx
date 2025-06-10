import styles from "./styles/profileImage.module.scss"
import profile from "../../../../assets/profile.png"
import React from "react"

interface ProfileImageProps {
  avatar?: string
  className?: string
}

const ProfileImageComponent: React.FC<
  ProfileImageProps
> = ({ avatar, className }) => {
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

export const ProfileImage = React.memo(
  ProfileImageComponent
)
