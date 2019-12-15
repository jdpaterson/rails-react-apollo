import * as React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Post } from "./Post";

const client: ApolloClient<InMemoryCache> = new ApolloClient({
  fetchOptions: {
    credentials: "same-origin"
  },
  request: operation => {
    const csrfToken = document
      .querySelector("meta[name=csrf-token]")
      .getAttribute("content");
    operation.setContext({
      headers: { "X-CSRF-Token": csrfToken }
    });
  }
});

const Root = (): JSX.Element => (
  <ApolloProvider client={client}>
    <Post />
  </ApolloProvider>
);

export default Root;
