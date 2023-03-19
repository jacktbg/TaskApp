import { useMutation } from "@apollo/client"
import {
  GET_TASKS,
  DELETE_TASK,
} from "./Queries/TasksQueries"

export const DeleteTask = (func, id) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    onCompleted: () => {
      func()
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
  return handleDeleteTask
}
