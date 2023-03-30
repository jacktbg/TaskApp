import "./updateTaskLabel.css"
import tag from "../../Images/Tag.svg"
import { useModal } from "../../../../Hooks/useModal"
import { UpdateTaskLabelModal } from "./Modal/UpdateTaskLabelModal"
import { useState } from "react"

export const UpdateTaskLabel = ({ tags, setTags }) => {
  const { showModal, handleCloseModal, handleShowModal } =
    useModal()
  const [name, setName] = useState([])
  return (
    <div className="Label">
      <button
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
      >
        {name.length > 0 ? null : (
          <img src={tag} alt="label or tag" />
        )}
        <p>
          {name.length > 0
            ? name.join("/")
            : tags.join("/")}
        </p>
      </button>
      {showModal && (
        <UpdateTaskLabelModal
          setTags={setTags}
          setName={setName}
        />
      )}
    </div>
  )
}
