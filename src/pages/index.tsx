import { GetStaticProps } from "next";
import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";

import { getAllBlogsFormatted } from "lib/blog";

import PageWrapper from "components/PageWrapper";
import BlogCard from "components/BlogCard";
import ProjectList from "components/ProjectList";

const Home = ({ blogs }) => {
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
      <Flex direction="column" mb={14}>
        <Box mb={6}>
          <Heading mb={2} as="h2" size="xl">
            I write too...
          </Heading>
          <Text>Some words by my, for the world</Text>
        </Box>
        <VStack align="flex-start" spacing={2}>
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </VStack>
      </Flex>
      <Flex direction="column" mb={14}>
        <Box mb={6}>
          <Heading mb={2} as="h2" size="xl">
            Personal Projects
          </Heading>
        </Box>
        <ProjectList />
      </Flex>
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getAllBlogsFormatted();

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
