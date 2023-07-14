import { gql } from "graphql-tag"

const GET_CLIENTS = gql`
   query getClients {
        clients {
            id
            name
            phone
            email
        }
    }
`

export { GET_CLIENTS }