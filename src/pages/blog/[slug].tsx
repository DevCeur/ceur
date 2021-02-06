import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { getBlogBySlug, getBlogsSlugs } from "lib/blog";

import PageWrapper from "components/PageWrapper";

const BlogPage = ({ blog }) => {
  return (
    <PageWrapper title={blog.title}>
      <Flex>
        <Heading>{blog.title}</Heading>
      </Flex>
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
