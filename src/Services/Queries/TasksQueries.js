import { gql } from "@apollo/client"

export const GET_TASKS = gql`
  query getTasks($taskStatus: Status!) {
    tasks(input: { status: $taskStatus }) {
      assignee {
        avatar
        id
        fullName
      }
      createdAt
      creator {
        id
        fullName
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

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assignee {
        id
        fullName
      }
      dueDate
      name
      pointEstimate
      status
      tags
    }
  }
`
export const DELETE_TASK = gql`
  mutation deleteTask($input: DeleteTaskInput!) {
    deleteTask(input: $input) {
      id
    }
  }
`
