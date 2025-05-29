import type { ErrorInfo } from "react"

export function logErrorToService(
  error: Error,
  info: ErrorInfo
) {
  console.error("Logged error:", error)
  console.error("Component stack:", info.componentStack)
}
