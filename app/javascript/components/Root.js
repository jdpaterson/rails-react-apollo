import React from "react"
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Posts} from "./Posts";

const client = new ApolloClient({
    fetchOptions: {
      credentials: 'same-origin',
    },
    request: (operation) => {
      const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content')
      operation.setContext({
        headers: { "X-CSRF-Token": csrfToken }
      })
    },
  })

const Root = () => (
    <ApolloProvider client={client}>
        <Posts />
    </ApolloProvider>
)

export default Root

// client
//     .query({
//         query: gql`
//             {
//                 posts {
//                     title
//                 }
//             }
//         `
//     })
//     .then(result => {        
//         console.log(result.data)
//     });