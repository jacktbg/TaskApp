import "./sidebar.css";
import punto from "./Images/Punto.svg";
import logo from "./Images/Logo.svg";
import dashboard from "./Images/Dashboard.svg";
import task from "./Images/Task.svg";

export const Sidebar = ({handleChangeView}) => {
  const handlePanelButtonClick = () => {
    handleChangeView("panel");
  };
  const handleListButtonClick = () => {
    handleChangeView("list");
  };

  return (
    <div className="Sidebar">
      <div className="sidebar-container">
        <div className="block-logo">
          <img src={punto} className="punto" alt="punto" />
          <img src={logo} className="logo" alt="logo" />
        </div>
        <button className="block" onClick={handlePanelButtonClick}>
          <img src={dashboard} className="dashboard" alt="dashboard" />
          <p>DASHBOARD</p>
        </button>
        <button className="block" onClick={handleListButtonClick}>
          <img src={task} className="task" alt="task" />
          <p>MY TASK</p>
        </button>
      </div>
    </div>
  );
};
