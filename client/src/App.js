import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Clients from './components/Clients'
import AddClientsModal from "./components/AddClientsModal";


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
        <Header />
        <div>
          <AddClientsModal></AddClientsModal>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
