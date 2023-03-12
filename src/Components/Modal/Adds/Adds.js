import "./adds.css";
import {Calendar} from "./Calendar/Calendar";
import {Estimate} from "./Estimate/Estimate";
import {Assignee} from "./Assignee/Assignee";
import {Label} from "./Label/Label";

export const Adds = ({
  setPointEstimate,
  setAssigneeId,
  setTags,
  setDueDate,
}) => {
  return (
    <div className="Adds">
      <Estimate setPointEstimate={setPointEstimate} />
      <Assignee setAssigneeId={setAssigneeId} />
      <Label setTags={setTags} />
      <Calendar setDueDate={setDueDate} />
    </div>
  );
};
