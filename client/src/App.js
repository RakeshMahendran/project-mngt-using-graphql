import Header from "./components/Header";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});


const client = new ApolloClient({
  uri: process.env.SERVICE_API || "https://projectgraphql.onrender.com/graphql",
  cache: cache,
});




function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
