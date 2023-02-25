import "./card.css";
import {Info} from "./Info/Info";
import {Timer} from "./Timer/Timer";
import {Tags} from "./Tags/Tags";
import {Reactions} from "./Reactions/Reactions";

export const Card = () => {
  return (
    <div className="Card">
      <Info />
      <Timer />
      <Tags />
      <Reactions />
    </div>
  );
};
