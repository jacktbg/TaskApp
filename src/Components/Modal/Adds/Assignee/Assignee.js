import "./assignee.css"
import person from "../../Images/Person.svg"
import { AssigneeModal } from "./Modal/AssigneeModal"
import { ModalUtility } from "../../../../Utilities/ModalUtility"
import { useState } from "react"
import { ShorterName } from "../../../../Utilities/ShorterName"

export const Assignee = ({ setAssigneeId }) => {
  const { showModal, handleShowModal, handleCloseModal } =
    ModalUtility()
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  return (
    <div className="Assignee">
      <button
        className={
          name ? "assignee-focused" : "assignee-button"
        }
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
        aria-label="Open assignee selection modal"
      >
        <img
          className={image ? "assignee-img" : "person-img"}
          src={image ? image : person}
          alt="person symbol"
        />
        <p>{name ? ShorterName(name) : "Assignee"}</p>
      </button>
      {showModal && (
        <AssigneeModal
          handleCloseModal={handleCloseModal}
          setAssigneeId={setAssigneeId}
          setImage={setImage}
          setName={setName}
        />
      )}
    </div>
  )
}
