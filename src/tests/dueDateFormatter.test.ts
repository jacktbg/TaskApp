import { describe, it, expect, vi, afterEach } from "vitest"
import { dueDateFormatter } from "../pages/home/utilities/dueDateFormatter"
import { global } from "@apollo/client/utilities/globals"

describe("dueDateFormatter", () => {
  const realDateNow = Date.now

  afterEach(() => {
    // Reset mocked date after each test
    vi.useRealTimers()
    global.Date.now = realDateNow
  })

  it('should return "TODAY" for the current UTC date', () => {
    const today = new Date()
    const todayISO = today.toISOString().split("T")[0] // Format as 'YYYY-MM-DD'

    expect(dueDateFormatter(todayISO)).toBe("TODAY")
  })

  it("should format future dates correctly", () => {
    const date = new Date(Date.UTC(2025, 5, 10)) // June 10, 2025 (month is 0-indexed)
    expect(dueDateFormatter(date.toISOString())).toBe(
      "10 june, 2025"
    )
  })

  it("should format past dates correctly", () => {
    const date = new Date(Date.UTC(2020, 0, 1)) // Jan 1, 2020
    expect(dueDateFormatter(date.toISOString())).toBe(
      "1 january, 2020"
    )
  })

  it("should correctly handle edge case near UTC midnight", () => {
    const fixedNow = new Date(
      Date.UTC(2023, 10, 15, 23, 59, 59)
    )
    vi.setSystemTime(fixedNow)

    const isoDate = new Date(
      Date.UTC(2023, 10, 15)
    ).toISOString()
    expect(dueDateFormatter(isoDate)).toBe("TODAY")
  })
})
