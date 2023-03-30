import "./updateTaskAdds.css"
import { UpdateTaskCalendar } from "./Calendar/UpdateTaskCalendar"
import { UpdateTaskEstimate } from "./Estimate/UpdateTaskEstimate"
import { UpdateTaskAssignee } from "./Assignee/UpdateTaskAssignee"
import { UpdateTaskLabel } from "./Label/UpdateTaskLabel"

export const UpdateTaskAdds = ({
  pointEstimate,
  assignee,
  tags,
  dueDate,
  setPointEstimate,
  setAssigneeId,
  setTags,
  setDueDate,
}) => {
  return (
    <div className="Adds">
      <UpdateTaskEstimate
        pointEstimate={pointEstimate}
        setPointEstimate={setPointEstimate}
      />
      <UpdateTaskAssignee
        assignee={assignee}
        setAssigneeId={setAssigneeId}
      />
      <UpdateTaskLabel tags={tags} setTags={setTags} />
      <UpdateTaskCalendar
        date={dueDate}
        setDueDate={setDueDate}
      />
    </div>
  )
}
