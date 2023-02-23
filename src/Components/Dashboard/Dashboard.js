import "./dashboard.css";
import {Topbar} from "./Topbar/Topbar";
import {Panel} from "./Panel/Panel";
import {Tasks} from "./Tasks/Tasks";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Topbar className="Topbar" />
      <Panel className="Panel" />
      <Tasks className="Tasks" />
    </div>
  );
};
