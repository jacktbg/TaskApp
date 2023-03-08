import "./buttons.css";
export const Buttons = ({handleCloseModal}) => {
  return (
    <div className="Buttons">
      <button className="cancel" onClick={handleCloseModal}>
        Cancel
      </button>
      <button className="create" onClick={handleCloseModal}>
        Create
      </button>
    </div>
  );
};
