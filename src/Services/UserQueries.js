import {gql} from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
  }
`;
export const GET_PROFILE = gql`
  query {
    profile {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
  }
`;
