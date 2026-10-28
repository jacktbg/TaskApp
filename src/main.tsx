import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/index.css"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { client } from "./services/client"
import { ApolloProvider } from "@apollo/client"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
)
