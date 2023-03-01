import calendar from "../../Images/Calendar.svg";
export const Calendar = () => {
  return (
    <div className="Calendar">
      <button>
        <img src={calendar} alt="calendar" />
        <p>Due date</p>
      </button>
    </div>
  );
};
