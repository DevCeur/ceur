import Head from "next/head";
import { AppProps } from "next/app";

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <>
      <Head>
        <title>Carlos U.</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
