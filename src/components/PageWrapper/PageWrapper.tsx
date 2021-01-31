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
      <Box w="85%" maxW="900px" mx="auto" mt={{ base: 6, md: 8 }}>
        {children}
      </Box>
    </>
  );
};

export default PageWrapper;
