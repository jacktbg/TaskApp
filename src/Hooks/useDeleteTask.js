import { useMutation } from "@apollo/client"
import {
  DELETE_TASK,
  GET_TASKS,
} from "../Services/TasksQueries"

export const useDeleteTask = (func, id) => {
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
