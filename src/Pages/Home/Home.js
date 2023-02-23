import "./home.css";
import {Dashboard} from "../../Components/Dashboard/Dashboard";
import {Sidebar} from "../../Components/Sidebar/Sidebar";
import {Searchbar} from "../../Components/Searchbar/Searchbar";

export const Home = () => {
  return (
    <div className="Home">
      <Sidebar className="Sidebar" />
      <Searchbar className="Searchbar" />
      <Dashboard className="Dashboard" />
    </div>
  );
};
