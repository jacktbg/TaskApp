import { gql } from '@apollo/client';

const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assignee {
        id
        name
      }
      createdAt
      creator {
        id
        name
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags {
        id
        name
      }
    }
  }
`;

const GET_USER = gql`
getUser {
  __type(name: "User") {
    name
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}`