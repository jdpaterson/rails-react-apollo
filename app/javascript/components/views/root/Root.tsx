import * as React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { RootNav } from "./RootNav";

interface IRootProps {}

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

const Root: React.FunctionComponent<IRootProps> = ({
  children
}): JSX.Element => (
  <ApolloProvider client={client}>
    <RootNav />
    {children}
  </ApolloProvider>
);

export default Root;
