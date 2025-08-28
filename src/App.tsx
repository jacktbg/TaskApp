import { Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { logErrorToService } from "./utilities/errorHandler"
import { NotFound } from "./pages/notFound/NotFound"
import { Error } from "./pages/error/Error"
import { Home } from "./pages/home/Home"
import { useEffect, useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import { useThemeStore } from "./store/useStore"

export const App = () => {
  const theme = useThemeStore((state) => state.theme)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    )

    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [theme])
  return (
    <ErrorBoundary
      FallbackComponent={Error}
      onError={logErrorToService}
    >
      <Routes>
        <Route
          path="/"
          element={isLoading ? <LoadingScreen /> : <Home />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}
