import {gql} from "@apollo/client";

const GET_ENUM = (name) => gql`
  query {
    __type(name: "${name}") {
      enumValues {
        name
      }
    }
  }
`;

export const {GET_POINT_ESTIMATE, GET_STATUS, GET_TAGS} = {
  GET_POINT_ESTIMATE: GET_ENUM("PointEstimate"),
  GET_STATUS: GET_ENUM("Status"),
  GET_TAGS: GET_ENUM("TaskTag"),
};
