export const dueDateFormatter = (
  dueDate: Date | string
): string => {
  const date = new Date(dueDate)
  const today = new Date()

  const isToday =
    date.getUTCFullYear() === today.getUTCFullYear() &&
    date.getUTCMonth() === today.getUTCMonth() &&
    date.getUTCDate() === today.getUTCDate()

  if (isToday) {
    return "TODAY"
  }

  const day = date.getUTCDate()
  const month = date
    .toLocaleString("en-US", {
      month: "long",
      timeZone: "UTC",
    })
    .toLowerCase()
  const year = date.getUTCFullYear()

  return `${day} ${month}, ${year}`
}
