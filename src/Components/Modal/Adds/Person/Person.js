import person from "../../Images/Person.svg";

export const Person = () => {
  return (
    <div className="Person">
      <button>
        <img src={person} alt="person symbol" />
        <p>Assignee</p>
      </button>
    </div>
  );
};
