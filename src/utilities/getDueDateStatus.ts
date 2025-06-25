type DueDateStatus = "late" | "warning" | "ontime"

export const getDueDateStatus = (
  dueDate: string
): DueDateStatus => {
  const due = new Date(dueDate)
  const now = new Date()

  // Strip time for accurate date comparison
  due.setHours(0, 0, 0, 0)
  now.setHours(0, 0, 0, 0)

  const diffMs = due.getTime() - now.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)

  if (diffDays < 0) return "late"
  if (diffDays <= 2) return "warning"
  return "ontime"
}
