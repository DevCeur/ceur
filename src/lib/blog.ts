import fs from "fs";
import path from "path";

import matter from "gray-matter";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import dayjs from "dayjs";

const root = process.cwd();

export const getBlogsSlugs = async () => {
  const blogsPath = path.join(root, "src/data", "blogs").toString();
  const files = fs.readdirSync(blogsPath);

  return files.map((file) => file.replace(".mdx", ""));
};

export const getPostContentBySlug = async (slug: string) => {
  const source = fs.readFileSync(
    path.join(root, "src/data/blogs", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = matter(source);

  const timeToRead = readingTime(content).text;
  const dateFormatted = dayjs(data.publishedAt).format("DD MMM, YYYY");
  const contentFormatted = await renderToString(content);

  return {
    meta: {
      ...data,
      publishedAt: dateFormatted,
      timeToRead,
      slug,
    },
    content: contentFormatted.renderedOutput,
  };
};

export const getAllBlogs = async () => {
  const files = fs.readdirSync(path.join(root, "src/data/blogs"));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src/data/blogs", postSlug),
      "utf-8"
    );

    const { data, content } = matter(source);

    const timeToRead = readingTime(content).text;
    const dateFormatted = dayjs(data.publishedAt).format("DD MMM, YYYY");

    return [
      {
        ...data,
        timeToRead,
        publishedAt: dateFormatted,
        rawPublishedAt: data.publishedAt,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};

export const getAllBlogsSorted = async () => {
  const blogs = await getAllBlogs();

  const sortedBlogs = blogs.sort(
    (a, b) => +new Date(a.rawPublishedAt) - +new Date(b.rawPublishedAt)
  );

  return sortedBlogs;
};
