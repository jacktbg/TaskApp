import "./modal.css"
import { Input } from "./Input/Input"
import { Adds } from "./Adds/Adds"
import { Buttons } from "./Buttons/Buttons"
import { useCreateTask } from "../../Hooks/useCreateTask"

export const Modal = ({ handleCloseModal }) => {
  const {
    setName,
    setPointEstimate,
    setAssigneeId,
    setTags,
    setDueDate,
    handleSubmit,
  } = useCreateTask(handleCloseModal)

  return (
    <div className="Modal">
      <form
        onSubmit={handleSubmit}
        className="modal-container"
      >
        <Input setName={setName} />
        <Adds
          setPointEstimate={setPointEstimate}
          setAssigneeId={setAssigneeId}
          setTags={setTags}
          setDueDate={setDueDate}
        />
        <Buttons
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  )
}
