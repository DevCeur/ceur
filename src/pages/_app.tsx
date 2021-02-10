import Head from "next/head";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import theme from "theme";
import globalStyles from "styles/global";

import Navigation from "components/Navigation";

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <>
      <Head>
        <title>Carlos U.</title>
      </Head>
      <div>
        <ChakraProvider theme={theme}>
          <Global styles={globalStyles} />
          <Navigation />
          <Component {...pageProps} />
        </ChakraProvider>
      </div>
    </>
  );
};

export default App;
