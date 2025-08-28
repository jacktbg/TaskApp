import styles from "./styles/profileImage.module.scss"
import profile from "../../../../assets/myProfile.png"
import React from "react"

interface ProfileImageProps {
  avatar?: string
  className?: string
}

const transformDicebearUrl = (url: string): string => {
  const regex =
    /^https:\/\/avatars\.dicebear\.com\/api\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)\.svg$/
  const match = url.match(regex)

  if (match) {
    const seed = match[2]
    return `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${seed}`
  }

  return url // return original if it doesn't match expected pattern
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
      src={avatar ? transformDicebearUrl(avatar) : profile}
      className={`${styles.image} ${className}`}
      alt="assignee to image"
      onError={handleImageError}
    />
  )
}

export const ProfileImage = React.memo(
  ProfileImageComponent
)
