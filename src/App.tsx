import { Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { logErrorToService } from "./utilities/errorHandler"
import { NotFound } from "./pages/notFound/NotFound"
import { Error } from "./pages/error/Error"
import { Home } from "./pages/home/Home"
import { useEffect, useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"

export const App = () => {
  // const theme = useThemeStore((state) => state.theme)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set theme on load
    // document.documentElement.setAttribute(
    //   "data-theme",
    //   theme
    // )

    // Simulate load or wait for actual readiness
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
    // }, [theme])
  }, [])
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
