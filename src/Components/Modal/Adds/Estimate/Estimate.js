import "./estimate.css"
import estimate from "../../Images/Estimate.svg"
import { EstimateModal } from "./Modal/EstimateModal"
import { ModalUtility } from "../../../../Utilities/ModalUtility"
import { useState } from "react"
import { StringToNumber } from "../../../../Utilities/StringToNumberUtility"

export const Estimate = ({ setPointEstimate }) => {
  const { showModal, handleShowModal, handleCloseModal } =
    ModalUtility()
  const [pointText, setPointText] = useState("")
  return (
    <div className="Estimate">
      <button
        className={
          pointText ? "estimate-focused" : "estimate-button"
        }
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
        label="open time selection modal"
      >
        <img src={estimate} alt="plus and minus" />
        <p>
          {pointText
            ? `${StringToNumber(pointText)} Points`
            : "Estimate"}
        </p>
      </button>
      {showModal && (
        <EstimateModal
          handleCloseModal={handleCloseModal}
          setPointEstimate={setPointEstimate}
          setPointText={setPointText}
        />
      )}
    </div>
  )
}
