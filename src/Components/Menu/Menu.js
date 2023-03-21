import "./menu.css"
import pencil from "./Images/Pencil.svg"
import trash from "./Images/Trash.svg"
import { useDeleteTask } from "../../Hooks/useDeleteTask"

export const Menu = ({ handleCloseModal, id }) => {
  const handleDeleteTask = useDeleteTask(
    handleCloseModal,
    id
  )
  return (
    <div className="Menu">
      <button>
        <img src={pencil} alt="pencil" />
        <p>Edit</p>
      </button>
      <button onClick={handleDeleteTask}>
        <img src={trash} alt="garbage container" />
        <p>Delete</p>
      </button>
    </div>
  )
}
