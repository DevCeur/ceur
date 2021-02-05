import { Heading, Text, VStack } from "@chakra-ui/react";

import PageWrapper from "components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper title="Hey!">
      <VStack py={8} as="header" align="flex-start" mb={12}>
        <Text pl={4} fontWeight="bold" color="cyan.500">
          &gt; Hey! I'm
        </Text>
        <Heading size="4xl">Carlos Uma&ntilde;a</Heading>
        <Text>
          Frontend developer, focused on React, Love learning new things
          everyday, Write sometimes about what I learn, playing video games and
          trying to be Backend too. &#127770;
        </Text>
      </VStack>
    </PageWrapper>
  );
};

export default Home;
