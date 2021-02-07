import Head from "next/head";

import { Box } from "@chakra-ui/react";

import Footer from "components/Footer";

interface IPageWrapper {
  title: string;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Carlos U. - {title}</title>
      </Head>
      <Box w="85%" maxW="750px" mx="auto" mt={{ base: 6, md: 8 }} pb={24}>
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default PageWrapper;
