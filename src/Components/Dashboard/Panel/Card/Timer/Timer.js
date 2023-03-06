import "./timer.css";
import clock from "../Images/Clock.svg";

function stringToNumber(str) {
  const numberMap = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    FOUR: 4,
    EIGHT: 8,
  };
  return numberMap[str];
}

export const Timer = ({points, date}) => {
  const keyWord = "T";
  return (
    <div className="Timer">
      <p className="points">{stringToNumber(points)} Points</p>
      <div className="clock">
        <img src={clock} alt="clock" />
        {/* because I receive the all datatime, and just need the yyyy/mm/dd */}
        <p>{date.split(keyWord)[0]}</p>
      </div>
    </div>
  );
};
