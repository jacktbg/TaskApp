import "./dashboard.css";

import {Topbar} from "./Topbar/Topbar";
import {Panel} from "./Panel/Panel";
import {Tasks} from "./Tasks/Tasks";

export const Dashboard = ({activeButton, handleShowModal}) => {
  return (
    <div className="Dashboard">
      <Topbar
        className="Topbar"
        activeButton={activeButton}
        handleShowModal={handleShowModal}
      />
      {activeButton === "list" ? (
        <Tasks className="Tasks" />
      ) : (
        <Panel className="Panel" />
      )}
    </div>
  );
};
