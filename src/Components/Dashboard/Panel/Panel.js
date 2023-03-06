import "./panel.css";
import {Card} from "./Card/Card";

export const Panel = () => {
  return (
    <div className="Panel">
      <div className="working">
        <h2>Working</h2>
        <Card status="TODO" />
      </div>
      <div className="progress">
        <h2>In Progress</h2>
        <Card status="IN_PROGRESS" />
      </div>
      <div className="completed">
        <h2>Completed</h2>
        <Card status="DONE" />
      </div>
    </div>
  );
};
