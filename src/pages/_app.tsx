import "styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme";

import Navigation from "components/Navigation";

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <>
      <Head>
        <title>Carlos U.</title>
      </Head>
      <div>
        <ChakraProvider theme={theme}>
          <Navigation />
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
    </>
  );
};

export default App;
