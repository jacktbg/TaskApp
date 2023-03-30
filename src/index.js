import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from "./Services/client"

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)
