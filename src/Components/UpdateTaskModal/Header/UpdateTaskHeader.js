import "./updateTaskHeader.css"
import { UpdateTaskStatus } from "./Status/UpdateTaskStatus"
import { useState } from "react"

export const UpdateTaskHeader = ({
  setName,
  setStatus,
  name,
  status,
}) => {
  const [localName, setLocalName] = useState(name)

  const handleInputValue = (event) => {
    const value = event.target.value
    setLocalName(value)
    setName(value)
  }
  return (
    <div className="UpdateTaskHeader">
      <input
        value={localName}
        placeholder="Task Title"
        onChange={handleInputValue}
      />

      <UpdateTaskStatus
        setStatus={setStatus}
        status={status}
      />
    </div>
  )
}
