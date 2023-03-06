import {gql} from "@apollo/client";

export const GET_USERS = gql`
  query users {
    users {
      id
      avatar
      email
    }
  }
`;
export const GET_PROFILE = gql`
  query profile {
    profile {
      id
      avatar
      email
    }
  }
`;
