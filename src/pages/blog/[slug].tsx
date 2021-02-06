import hydrate from "next-mdx-remote/hydrate";

import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

import { MDX_COMPONENTS } from "utils/enum";
import { getBlogBySlug, getBlogsSlugs } from "lib/blog";

import PageWrapper from "components/PageWrapper";
import Logo from "theme/Icons/Logo";
import Image from "next/image";

const BlogPage = ({ blog }) => {
  const content = hydrate(blog.source, { components: MDX_COMPONENTS });

  return (
    <PageWrapper title={blog.title}>
      <Flex direction="column">
        <Heading as="h1" size="2xl" mb={2}>
          {blog.title}
        </Heading>
        <Text fontStyle="italic">{blog.summary}</Text>
        <HStack mt={4} justify="space-between">
          <HStack>
            <Logo />
            <Text>{blog.author}.</Text>
          </HStack>
          <Flex>
            <HStack>
              <Icon as={AiOutlineClockCircle} color="gray.400" />
              <Text fontSize="14px" color="gray.400">
                {blog.timeToRead}
              </Text>
            </HStack>
            <Text
              ml={4}
              pl={4}
              borderLeft="1px"
              borderLeftColor="gray.200"
              fontSize="14px"
              color="gray.500"
            >
              {blog.publishedAt}
            </Text>
          </Flex>
        </HStack>
      </Flex>
      <Box
        mt={6}
        width="100%"
        height={{ base: "200px", md: "300px" }}
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="xl"
      >
        <Image src={blog.image} objectFit="cover" layout="fill" />
      </Box>
      <Box my={8}>{content}</Box>
    </PageWrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug.toString());

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogsSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;