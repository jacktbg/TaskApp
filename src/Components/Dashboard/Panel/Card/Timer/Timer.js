import "./timer.css";
import clock from "../Images/Clock.svg";

export const Timer = () => {
  return (
    <div className="Timer">
      <p className="points">Points</p>
      <div className="clock">
        <img src={clock} alt="clock" />
        <p>TODAY</p>
      </div>
    </div>
  );
};
