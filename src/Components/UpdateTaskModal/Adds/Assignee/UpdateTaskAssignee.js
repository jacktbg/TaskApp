import "./updateTaskAssignee.css"
import person from "../../Images/Person.svg"
import { UpdateTaskAssigneeModal } from "./Modal/UpdateTaskAssigneeModal"
import { useModal } from "../../../../Hooks/useModal"
import { useState } from "react"
import { ShorterName } from "../../../../Utilities/ShorterName"

export const UpdateTaskAssignee = ({
  assignee,
  setAssigneeId,
}) => {
  const { showModal, handleShowModal, handleCloseModal } =
    useModal()

  const avatar = assignee.avatar
  const fullName = assignee.fullName

  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  return (
    <div className="UpdateTaskAssignee">
      <button
        className="uta-focused"
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
        aria-label="Open assignee selection modal"
      >
        <img
          className={image ? "uta-img" : "uta-person"}
          src={image ? image : avatar ? avatar : person}
          alt="person symbol"
        />
        <p>
          {name ? ShorterName(name) : ShorterName(fullName)}
        </p>
      </button>
      {showModal && (
        <UpdateTaskAssigneeModal
          handleCloseModal={handleCloseModal}
          setAssigneeId={setAssigneeId}
          setImage={setImage}
          setName={setName}
        />
      )}
    </div>
  )
}
