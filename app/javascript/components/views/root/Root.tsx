import * as React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Banner } from "../../library";
import { RootNav } from "./RootNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles.scss";

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

toast.configure();

const Root: React.FunctionComponent<IRootProps> = ({
  children
}): JSX.Element => (
  <ApolloProvider client={client}>
    <ToastContainer />
    <Banner>Rails React Apollo</Banner>
    <RootNav />
    <main>{children}</main>
  </ApolloProvider>
);

export default Root;
