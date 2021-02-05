import { GetStaticProps } from "next";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { getAllPosts } from "lib/blog";

import PageWrapper from "components/PageWrapper";
import BlogCard from "components/BlogCard";

const Home = ({ posts }) => {
  return (
    <PageWrapper title="Hey!">
      <VStack py={8} as="header" align="flex-start" mb={8}>
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
      <Flex direction="column">
        <Box mb={6}>
          <Heading mb={2} as="h2">
            I Write too...
          </Heading>
          <Text>
            This is what I write, what I think and what I want to share with the
            world in my little internet corner.
          </Text>
        </Box>
        <VStack align="flex-start" spacing={4}>
          {posts.map((post) => (
            <BlogCard blog={post} />
          ))}
        </VStack>
      </Flex>
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
