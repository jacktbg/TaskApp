import { Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { logErrorToService } from "./utilities/errorHandler"
import { NotFound } from "./pages/notFound/NotFound"
import { Error } from "./pages/error/Error"
import { Home } from "./pages/home/Home"

export const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={Error}
      onError={logErrorToService}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  )
}
