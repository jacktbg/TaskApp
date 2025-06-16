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
  const token = import.meta.env.VITE_GRAPHQL_API_TOKEN
  console.log(token)
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
