import person from "../../Images/Person.svg";

export const Person = () => {
  return (
    <button className="Person">
      <img src={person} alt="person symbol" />
      <p>Assignee</p>
    </button>
  );
};
