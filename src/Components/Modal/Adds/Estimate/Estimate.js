import "./estimate.css";
import estimate from "../../Images/Estimate.svg";
import {EstimateModal} from "./Modal/EstimateModal";
import {ModalService} from "../../../../Services/ModalService";
import {useState} from "react";
import {stringToNumber} from "../../../Dashboard/Panel/Card/Timer/Timer";

export const Estimate = ({setPointEstimate}) => {
  const {showModal, handleShowModal, handleCloseModal} = ModalService();
  const [pointText, setPointText] = useState("");
  return (
    <div className="Estimate">
      <button
        className={pointText ? "estimate-focused" : "estimate-button"}
        onClick={showModal ? handleCloseModal : handleShowModal}
        label="open time selection modal"
      >
        <img src={estimate} alt="plus and minus" />
        <p>{pointText ? `${stringToNumber(pointText)} Points` : "Estimate"}</p>
      </button>
      {showModal && (
        <EstimateModal
          handleCloseModal={handleCloseModal}
          setPointEstimate={setPointEstimate}
          setPointText={setPointText}
        />
      )}
    </div>
  );
};
