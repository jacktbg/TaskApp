import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Home"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
