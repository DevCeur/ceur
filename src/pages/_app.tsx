import Head from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Global } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "theme";
import globalStyles from "styles/global";

import Navigation from "components/Navigation";

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title="Carlos U. - Frontend Developer"
        description="Frontend developer, focused on React, Love learning new things everyday, Write sometimes about what I learn, playing video games and trying to be Backend too. "
        openGraph={{
          url: "https://ceur.dev",
          title: "Carlos U. - Frontend Developer",
          description:
            "Frontend developer, focused on React, Love learning new things everyday, Write sometimes about what I learn, playing video games and trying to be Backend too. ",
          images: [
            {
              url: "/SEO/seo-image",
              width: 900,
              height: 600,
              alt: "Just a martian desert",
            },
          ],
          site_name: "Carlos U",
        }}
      />
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
