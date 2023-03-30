import "./updateTaskCalendar.css"
import { useRef, useState } from "react"
import calendar from "../../Images/Calendar.svg"
import { DateShorter } from "../../../../Utilities/DateShorter"

export const UpdateTaskCalendar = ({
  date,
  setDueDate,
}) => {
  const datepickerRef = useRef(null)
  const [selectedDate, setSelectedDate] = useState("")

  const handleDateChange = (event) => {
    const selectedValue = event.target.value
    setDueDate(selectedValue)
    setSelectedDate(selectedValue)
  }

  const handleClick = () => {
    datepickerRef.current?.showPicker()
  }

  return (
    <div className="Calendar">
      <button onClick={handleClick}>
        <img src={calendar} alt="calendar" />
        <p>
          {selectedDate ? selectedDate : DateShorter(date)}
        </p>
      </button>
      <input
        type="date"
        id="datepicker"
        onChange={handleDateChange}
        ref={datepickerRef}
      />
    </div>
  )
}
