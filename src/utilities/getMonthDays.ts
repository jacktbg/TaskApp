export const getMonthDays = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1)
  const startDay = firstDay.getDay()

  const days: { date: Date; isCurrentMonth: boolean }[] = []

  // Previous month padding
  for (let i = startDay - 1; i >= 0; i--) {
    const d = new Date(year, month, -i)
    days.push({ date: d, isCurrentMonth: false })
  }

  const lastDay = new Date(year, month + 1, 0).getDate()
  for (let i = 1; i <= lastDay; i++) {
    const d = new Date(year, month, i)
    days.push({ date: d, isCurrentMonth: true })
  }

  // Padding for next month to complete rows
  const totalCells = Math.ceil(days.length / 7) * 7
  const nextDays = totalCells - days.length
  for (let i = 1; i <= nextDays; i++) {
    const d = new Date(year, month + 1, i)
    days.push({ date: d, isCurrentMonth: false })
  }

  return days
}
