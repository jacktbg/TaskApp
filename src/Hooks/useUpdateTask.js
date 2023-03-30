import {
  UPDATE_TASK,
  GET_TASKS,
} from "../Services/TasksQueries"
import { useMutation } from "@apollo/client"
import { useState } from "react"

export const useUpdateTask = (func, id) => {
  const [name, setName] = useState("")
  const [pointEstimate, setPointEstimate] = useState("")
  const [assigneeId, setAssigneeId] = useState("")
  const [tags, setTags] = useState([])
  const [dueDate, setDueDate] = useState("")
  const [status, setStatus] = useState("")

  const [updateTask] = useMutation(UPDATE_TASK, {
    onCompleted: () => {
      func()
    },
    refetchQueries: [{ query: GET_TASKS }],
    onError: (error) => {
      console.error(error)
    },
  })

  const handleUpdate = (event) => {
    event.preventDefault()
    if (
      id &&
      name &&
      pointEstimate &&
      assigneeId &&
      tags.length > 0 &&
      dueDate &&
      status
    ) {
      updateTask({
        variables: {
          input: {
            id,
            name,
            pointEstimate,
            assigneeId,
            tags,
            dueDate,
            status,
          },
        },
      })
    }
  }
  return {
    setName,
    setPointEstimate,
    setAssigneeId,
    setTags,
    setDueDate,
    setStatus,
    handleUpdate,
  }
}
