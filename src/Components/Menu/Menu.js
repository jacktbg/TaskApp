import "./menu.css"
import pencil from "./Images/Pencil.svg"
import trash from "./Images/Trash.svg"
import { useDeleteTask } from "../../Hooks/useDeleteTask"
import { UpdateTaskModal } from "../UpdateTaskModal/UpdateTaskModal"
import { useModal } from "../../Hooks/useModal"
import { createPortal } from "react-dom"

export const Menu = ({ handleCloseMenu, task }) => {
  const id = task.id
  const handleDeleteTask = useDeleteTask(
    handleCloseMenu,
    id
  )

  const { showModal, handleCloseModal, handleShowModal } =
    useModal()

  return (
    <div className="Menu">
      <button
        onClick={
          showModal ? handleCloseModal : handleShowModal
        }
      >
        <img src={pencil} alt="pencil" />
        <p>Edit</p>
      </button>
      {showModal &&
        createPortal(
          <UpdateTaskModal
            handleCloseModal={handleCloseModal}
            task={task}
          />,
          document.getElementById("Modal")
        )}
      <button onClick={handleDeleteTask}>
        <img src={trash} alt="garbage container" />
        <p>Delete</p>
      </button>
    </div>
  )
}
