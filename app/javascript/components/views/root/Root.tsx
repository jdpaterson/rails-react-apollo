import * as React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BannerHeader, BannerH1 } from "~/library";
import { RootNav } from "./RootNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IRootProps { }

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

toast.configure()

const Root: React.FunctionComponent<IRootProps> = ({
  children
}): JSX.Element => (
    <ApolloProvider client={client}>
      <ToastContainer />
      <BannerHeader>
        <BannerH1>
          {"Rails React Apollo"}
        </BannerH1>
      </BannerHeader>
      <RootNav />
      <main>
        {children}
      </main>
    </ApolloProvider>
  );

export default Root;
