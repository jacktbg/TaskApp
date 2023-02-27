import "./adds.css";
import {Calendar} from "./Calendar/Calendar";
import {Estimate} from "./Estimate/Estimate";
import {Person} from "./Person/Person";
import {Tag} from "./Tag/Tag";

export const Adds = () => {
  return (
    <div className="Adds">
      <Estimate />
      <Person />
      <Tag />
      <Calendar />
    </div>
  );
};
