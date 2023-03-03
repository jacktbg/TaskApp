import "./modal.css";
import estimate from "../../Images/Estimate.svg";

export const EstimateModal = ({handleCloseModal}) => {
  const simpleNumber = [0, 1, 2, 4, 8];
  return (
    <div className="EstimateModal">
      <p>Estimate</p>
      {simpleNumber.map((i, index) => (
        <button key={index} onClick={handleCloseModal}>
          <img src={estimate} alt="plus and minus" />
          <p>{i} Points</p>
        </button>
      ))}
    </div>
  );
};
