import {
  CREATE_TASK,
  GET_TASKS,
} from "../Services/TasksQueries"
import { useMutation } from "@apollo/client"
import { useState } from "react"

export const useCreateTask = (func) => {
  const [name, setName] = useState("")
  const [pointEstimate, setPointEstimate] = useState("")
  const [assigneeId, setAssigneeId] = useState("")
  const [tags, setTags] = useState([])
  const [dueDate, setDueDate] = useState("")
  const status = "TODO"

  const [createTask] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      func()
    },
    refetchQueries: [{ query: GET_TASKS }],
    onError: (error) => {
      console.error(error)
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      name &&
      pointEstimate &&
      assigneeId &&
      tags.length > 0 &&
      dueDate
    ) {
      createTask({
        variables: {
          input: {
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
    handleSubmit,
  }
}
