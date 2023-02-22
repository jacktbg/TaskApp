import "./sidebar.css";
import punto from "./Punto.svg";
import logo from "./Logo.svg";
import dashboard from "./Dashboard.svg";
import task from "./Task.svg";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="container">
        <div className="block-logo">
          <img src={punto} className="punto" alt="punto" />
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="block">
          <img src={dashboard} className="dashboard" alt="dashboard" />
          <p>DASHBOARD</p>
        </div>
        <div className="block">
          <img src={task} className="task" alt="task" />
          <p>MY TASK</p>
        </div>
      </div>
    </div>
  );
};
