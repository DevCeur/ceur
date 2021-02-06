import { useState } from "react";
import { GetStaticProps } from "next";
import { Heading, Input, Text, VStack } from "@chakra-ui/react";

import { getAllBlogsFormatted } from "lib/blog";

import BlogCard from "components/BlogCard";
import PageWrapper from "components/PageWrapper";

const Blog = ({ blogs }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredBlogs = blogs.filter(({ title }: { title: string }) =>
    title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <PageWrapper title="Blog">
      <Heading as="h1" size="4xl" mb={4}>
        My Blog
      </Heading>
      <Text>
        All of this started on 2020, It's live since 2021 and I'm trying to
        learn, explain and show what I know to help at someone in this dev
        world.
      </Text>
      <Input
        mt={10}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
      />
      <VStack mt={6} align="flex-start" spacing={2}>
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </VStack>
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

export default Blog;
