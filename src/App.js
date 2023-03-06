import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import {Profile} from "./Services/Profile";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default App;
