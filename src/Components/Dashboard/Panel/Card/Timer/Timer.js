import "./timer.css"
import clock from "../Images/Clock.svg"
import { StringToNumber } from "../../../../../Utilities/StringToNumberUtility"

export const Timer = ({ points, date }) => {
  const keyWord = "T"
  return (
    <div className="Timer">
      <p className="points">
        {StringToNumber(points)} Points
      </p>
      <div className="clock">
        <img src={clock} alt="clock" />
        {/* because I receive the all datatime, and just need the yyyy/mm/dd */}
        <p>{date.split(keyWord)[0]}</p>
      </div>
    </div>
  )
}
