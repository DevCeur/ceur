import Head from "next/head";

import { Box } from "@chakra-ui/react";

interface IPageWrapper {
  title: string;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Carlos U. - {title}</title>
      </Head>
      <Box w="85%" maxW="85%" mx="auto" mt={6}>
        {children}
      </Box>
    </>
  );
};

export default PageWrapper;
