import Head from "next/head";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, translateX: -5 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 5 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
        <Footer />
      </Box>
    </>
  );
};

export default PageWrapper;
