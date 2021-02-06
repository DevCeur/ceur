import hydrate from "next-mdx-remote/hydrate";

import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading } from "@chakra-ui/react";

import { MDX_COMPONENTS } from "utils/enum";
import { getBlogBySlug, getBlogsSlugs } from "lib/blog";

import PageWrapper from "components/PageWrapper";

const BlogPage = ({ blog }) => {
  const content = hydrate(blog.content, { components: MDX_COMPONENTS });

  return (
    <PageWrapper title={blog.title}>
      <Flex>
        <Heading>{blog.title}</Heading>
      </Flex>
      <Box>{content}</Box>
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
