import Header from "./components/Header";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Clients from './components/Clients'
import AddClientsModal from "./components/AddClientsModal";
import Projects from "./components/Projects";
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
  uri: 'http://localhost:5000/graphql',
  cache: cache,
})




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
