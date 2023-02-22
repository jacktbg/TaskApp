import "./home.css";
import {Dashboard} from "../../Components/Dashboard/Dashboard";
import {Sidebar} from "../../Components/Sidebar/Sidebar";
import {Topbar} from "../../Components/Topbar/Topbar";

export const Home = () => {
  return (
    <div className="Home">
      <Sidebar className="Sidebar" />
      <Topbar className="Topbar" />
      <Dashboard className="Dashboard" />
    </div>
  );
};
