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

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
      name
      status
      pointEstimate
      tags
      assignee {
        id
        fullName
      }
      creator {
        id
        fullName
      }
    }
  }
`;
