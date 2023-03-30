import "./updateTaskEstimate.css"
import estimate from "../../Images/Estimate.svg"
import { UpdateTaskEstimateModal } from "./Modal/UpdateTaskEstimateModal"
import { useModal } from "../../../../Hooks/useModal"
import { useState } from "react"
import { StringToNumber } from "../../../../Utilities/StringToNumberUtility"

export const UpdateTaskEstimate = ({
  pointEstimate,
  setPointEstimate,
}) => {
  const { showModal, handleShowModal, handleCloseModal } =
    useModal()
  const [pointText, setPointText] = useState("")
  return (
    <div className="UpdateTaskEstimate">
      <button
        className="ute-focused"
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
        label="open time selection modal"
      >
        <img src={estimate} alt="plus and minus" />

        {pointText
          ? `${StringToNumber(pointText)} Points`
          : `${StringToNumber(pointEstimate)} Points`}
      </button>
      {showModal && (
        <UpdateTaskEstimateModal
          handleCloseModal={handleCloseModal}
          setPointEstimate={setPointEstimate}
          setPointText={setPointText}
        />
      )}
    </div>
  )
}
