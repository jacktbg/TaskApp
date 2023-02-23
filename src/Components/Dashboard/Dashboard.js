import "./dashboard.css";
import React, {useState} from "react";
import {Topbar} from "./Topbar/Topbar";
import {Panel} from "./Panel/Panel";
import {Tasks} from "./Tasks/Tasks";

export const Dashboard = () => {
  const [showList, setShowList] = useState(false);
  const handleButtonClick = (WhatToShow) => {
    WhatToShow === "list" ? setShowList(true) : setShowList(false);
  };
  return (
    <div className="Dashboard">
      <Topbar className="Topbar" handleButtonClick={handleButtonClick} />
      {showList ? <Tasks className="Tasks" /> : <Panel className="Panel" />}
    </div>
  );
};
