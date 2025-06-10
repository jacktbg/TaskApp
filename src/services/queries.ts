import { gql } from "@apollo/client"

export const GET_TASKS = gql`
  query Tasks($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      name
      pointEstimate
      dueDate
      tags
      status
      assignee {
        id
        avatar
        fullName
      }
      position
    }
  }
`

export const GET_USERS = gql`
  query Users {
    users {
      id
      avatar
      fullName
    }
  }
`
