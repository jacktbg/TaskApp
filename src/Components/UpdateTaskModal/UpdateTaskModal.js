import "./updateTaskModal.css"
import { UpdateTaskHeader } from "./Header/UpdateTaskHeader"
import { UpdateTaskAdds } from "./Adds/UpdateTaskAdds"
import { UpdateTaskButtons } from "./Buttons/UpdateTaskButtons"
import { useUpdateTask } from "../../Hooks/useUpdateTask"

export const UpdateTaskModal = ({
  handleCloseModal,
  task,
}) => {
  const {
    id,
    name,
    pointEstimate,
    assignee,
    dueDate,
    tags,
    status,
  } = task

  const {
    setName,
    setPointEstimate,
    setAssigneeId,
    setTags,
    setDueDate,
    setStatus,
    handleUpdate,
  } = useUpdateTask(handleCloseModal, id)

  return (
    <div className="UpdateTaskModal">
      <form
        onSubmit={handleUpdate}
        className="update-container"
      >
        <UpdateTaskHeader
          name={name}
          status={status}
          setName={setName}
          setStatus={setStatus}
        />
        <UpdateTaskAdds
          pointEstimate={pointEstimate}
          assignee={assignee}
          tags={tags}
          dueDate={dueDate}
          setPointEstimate={setPointEstimate}
          setAssigneeId={setAssigneeId}
          setTags={setTags}
          setDueDate={setDueDate}
        />
        <UpdateTaskButtons
          handleCloseModal={handleCloseModal}
          handleSubmit={handleUpdate}
        />
      </form>
    </div>
  )
}
