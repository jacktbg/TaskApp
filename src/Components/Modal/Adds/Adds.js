import "./adds.css";
import {Calendar} from "./Calendar/Calendar";
import {Estimate} from "./Estimate/Estimate";
import {Assignee} from "./Assignee/Assignee";
import {Label} from "./Label/Label";

export const Adds = () => {
  return (
    <div className="Adds">
      <Estimate />
      <Assignee />
      <Label />
      <Calendar />
    </div>
  );
};
