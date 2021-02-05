import { GetStaticProps } from "next";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { getAllPosts } from "lib/blog";

import PageWrapper from "components/PageWrapper";

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
        <Heading>All Blogs</Heading>
        {posts.map((post) => (
          <Flex key={post.slug}>
            <Heading as="h3">{post.title}</Heading>
          </Flex>
        ))}
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
