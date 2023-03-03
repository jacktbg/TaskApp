import "./adds.css";
import {Calendar} from "./Calendar/Calendar";
import {Estimate} from "./Estimate/Estimate";
import {Assignee} from "./Assignee/Assignee";
import {Tag} from "./Tag/Tag";

export const Adds = () => {
  return (
    <div className="Adds">
      <Estimate />
      <Assignee />
      <Tag />
      <Calendar />
    </div>
  );
};
