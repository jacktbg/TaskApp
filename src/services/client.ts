import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = new HttpLink({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNmU1OGNlMzMtMjdkMi00OWM2LTg4ZmMtNmMxYTEzZjZlNGUwIiwicHJvamVjdElkIjoiNGJjZDUyNmYtNzNkNS00NGFiLThlYmEtM2UzZDJkMjY2NGQxIiwiZnVsbE5hbWUiOiJKYWNrIEJ1c3RpbnphIiwiZW1haWwiOiJqYWNrYnVzdGluemFAcmF2bi5jbyIsImlhdCI6MTc0ODQ0NzMwOX0.zui9-EyO6RaXvG9dCzem0NnPG8itWc8dTZ0x8mg-IZ0"
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }
})

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})
