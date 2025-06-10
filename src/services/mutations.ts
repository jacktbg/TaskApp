import { gql } from "@apollo/client"

export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assignee {
        id
      }
      dueDate
      name
      pointEstimate
      status
      tags
    }
  }
`
export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      assignee {
        id
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`
export const DELETE_TASK_MUTATION = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
    }
  }
`
