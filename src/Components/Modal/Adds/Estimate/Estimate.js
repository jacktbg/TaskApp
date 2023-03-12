import estimate from "../../Images/Estimate.svg";
import {EstimateModal} from "./EstimateModal";
import {ModalService} from "../../../../Services/ModalService";

export const Estimate = ({setPointEstimate}) => {
  const {showModal, handleShowModal, handleCloseModal} = ModalService();
  return (
    <div>
      <button
        className="Estimate"
        onClick={showModal ? handleCloseModal : handleShowModal}
        label="open time selection modal"
      >
        <img src={estimate} alt="plus and minus" />
        <p>Estimate</p>
      </button>
      {showModal && (
        <EstimateModal
          handleCloseModal={handleCloseModal}
          setPointEstimate={setPointEstimate}
        />
      )}
    </div>
  );
};
