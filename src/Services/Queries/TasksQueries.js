import {gql} from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks($status: Status!) {
    tasks(input: {status: $status}) {
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
`;
