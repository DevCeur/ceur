import hydrate from "next-mdx-remote/hydrate";

import { GetStaticPaths, GetStaticProps } from "next";

import { MDX_COMPONENTS } from "utils/enum";
import { getBlogBySlug, getBlogsSlugs } from "lib/blog";

import BlogLayout from "components/BlogLayout";

const BlogPage = ({ blog }) => {
  const content = hydrate(blog.source, { components: MDX_COMPONENTS });

  return <BlogLayout blog={blog} content={content} />;
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
