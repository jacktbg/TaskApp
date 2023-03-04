import {gql} from "@apollo/client";

// export const CREATE_TASK_MUTATION = gql`
//   mutation CreateTask($input: CreateTaskInput!) {
//     createTask(input: $input) {
//       assignee {
//         id
//         name
//       }
//       createdAt
//       creator {
//         id
//         name
//       }
//       dueDate
//       id
//       name
//       pointEstimate
//       position
//       status
//       tags {
//         id
//         name
//       }
//     }
//   }
// `;

export const GET_USER = gql`
  query {
    users {
      id
      avatar
      email
    }
  }
`;
