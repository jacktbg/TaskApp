import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home/Home";
import { Tests } from "./Services/Tests";
 

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Tests" element={<Tests/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
