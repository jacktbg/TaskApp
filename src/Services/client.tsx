import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiYTYxZjQ2NmUtNGQ3YS00NjliLWI4OGQtZGQ1Y2Q0ZDdmODZkIiwiZnVsbE5hbWUiOiJKYWNrIFRvbWFzIEJ1c3RpbnphIEdhbWVybyIsImVtYWlsIjoiamFjay5idXN0aW56YUB0ZWNzdXAuZWR1LnBlIiwiaWF0IjoxNjc2OTE3MzI3fQ.Df9_cUpslSmf008XzGLpGC_Eywh9bRaOmXZF_apZyEc');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "error token",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});