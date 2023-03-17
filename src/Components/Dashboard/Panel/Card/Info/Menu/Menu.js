import "./menu.css"
import pencil from "./Images/Pencil.svg"
import trash from "./Images/Trash.svg"
import {
  DELETE_TASK,
  GET_TASKS,
} from "../../../../../../Services/Queries/TasksQueries"
import { useMutation } from "@apollo/client"

export const Menu = ({ handleCloseModal, id }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    onCompleted: () => {
      handleCloseModal()
    },
    refetchQueries: [{ query: GET_TASKS }],
    onError: (error) => {
      console.error(error)
    },
  })
  const handleDeleteTask = () => {
    deleteTask({
      variables: {
        input: {
          id,
        },
      },
    })
  }
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
