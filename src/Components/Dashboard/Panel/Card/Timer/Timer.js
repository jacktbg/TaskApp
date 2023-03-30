import "./timer.css"
import clock from "../Images/Clock.svg"
import { StringToNumber } from "../../../../../Utilities/StringToNumberUtility"
import { DateShorter } from "../../../../../Utilities/DateShorter"

export const Timer = ({ points, date }) => {
  return (
    <div className="Timer">
      <p className="points">
        {StringToNumber(points)} Points
      </p>
      <div className="clock">
        <img src={clock} alt="clock" />
        <p>{DateShorter(date)}</p>
      </div>
    </div>
  )
}
