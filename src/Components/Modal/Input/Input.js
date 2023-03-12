import "./input.css";

export const Input = ({setName}) => {
  return (
    <div className="Input">
      <input
        placeholder="Task Title"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};
