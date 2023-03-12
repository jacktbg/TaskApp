import {useRef} from "react";
import calendar from "../../Images/Calendar.svg";

export const Calendar = ({setDueDate}) => {
  const datepickerRef = useRef(null);

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleClick = () => {
    datepickerRef.current?.showPicker();
  };

  return (
    <div className="Calendar">
      <button onClick={handleClick}>
        <img src={calendar} alt="calendar" />
        <p>Due date</p>
      </button>
      <input
        type="date"
        id="datepicker"
        style={{visibility: "hidden", position: "absolute"}}
        onChange={handleDateChange}
        ref={datepickerRef}
      />
    </div>
  );
};
