import calendar from "../../Images/Calendar.svg";

export const Calendar = () => {
  const handleClick = () => {
    const datepicker = document.getElementById("datepicker");
    if (datepicker) {
      datepicker.showPicker();
    }
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
      />
    </div>
  );
};
