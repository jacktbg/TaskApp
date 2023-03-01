import {useState} from "react";
import estimate from "../../Images/Estimate.svg";
import {EstimateModal} from "./EstimateModal";

export const Estimate = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <button className="Estimate" onClick={handleShowModal}>
        <img src={estimate} alt="plus and minus" />
        <p>Estimate</p>
      </button>
      {showModal && <EstimateModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};
