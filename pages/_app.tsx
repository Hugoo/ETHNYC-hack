import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import "../styles/globals.scss";
import apolloClient from "../services/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
