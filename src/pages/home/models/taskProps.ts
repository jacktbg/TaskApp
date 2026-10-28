export type PointEstimate =
  | "EIGHT"
  | "FOUR"
  | "ONE"
  | "TWO"
  | "ZERO"

export type Status =
  | "BACKLOG"
  | "CANCELLED"
  | "DONE"
  | "IN_PROGRESS"
  | "TODO"

export type TaskTag =
  | "ANDROID"
  | "IOS"
  | "NODE_JS"
  | "RAILS"
  | "REACT"

export type UserType = "ADMIN" | "CANDIDATE"

export type Task = {
  assignee: User
  createdAt?: string
  creator?: User
  dueDate: string
  id: string
  name: string
  pointEstimate: PointEstimate
  position?: number
  status: Status
  tags: TaskTag[]
}

export interface TaskProps {
  id: string
  dueDate: string
  name: string
  pointEstimate: PointEstimate
  status: Status
  tags: TaskTag[]
  avatar: string
}

export type User = {
  avatar?: string
  createdAt?: string
  email?: string
  fullName?: string
  id?: string
  type?: UserType
  updatedAt?: string
}
