export const StatusToTitle = (str) => {
  const statusObject = {
    BACKLOG: "Backlog",
    CANCELLED: "Cancelled",
    DONE: "Completed",
    IN_PROGRESS: "In Progress",
    TODO: "Working",
  }
  return statusObject[str]
}
