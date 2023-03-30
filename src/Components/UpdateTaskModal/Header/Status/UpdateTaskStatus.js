import "./updateTaskStatus.css"
import { useModal } from "../../../../Hooks/useModal"
import { UpdateTaskStatusModal } from "./Modal/UpdateTaskStatusModal"
import { StatusToTitle } from "../../../../Utilities/StatusToTitle"
import { useState } from "react"

export const UpdateTaskStatus = ({ setStatus, status }) => {
  const { showModal, handleShowModal, handleCloseModal } =
    useModal()
  const [statusText, setStatusText] = useState("")
  return (
    <div className="UpdateTaskStatus">
      <button
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
      >
        {statusText
          ? StatusToTitle(statusText)
          : StatusToTitle(status)}
      </button>
      {showModal && (
        <UpdateTaskStatusModal
          currentlyStatus={status}
          setStatus={setStatus}
          setStatusText={setStatusText}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  )
}
