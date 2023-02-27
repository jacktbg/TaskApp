import calendar from "../../Images/Calendar.svg";
export const Calendar = () => {
  return (
    <button className="Calendar">
      <img src={calendar} alt="calendar" />
      <p>Due date</p>
    </button>
  );
};
