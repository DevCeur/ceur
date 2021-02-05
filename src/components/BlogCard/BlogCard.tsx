import NextLink from "next/link";

import { Flex, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

interface BlogCard {
  blog: any;
}

const BlogCard = ({ blog }: BlogCard) => {
  return (
    <NextLink href={`/blog/${blog.slug}`} passHref>
      <Link
        _hover={{
          textDecor: "none",
          boxShadow: "xl",
        }}
        width="100%"
        p={{ base: 4, md: 6 }}
        borderRadius="lg"
      >
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <VStack align="flex-start">
            <Text fontFamily="heading" fontSize="2xl" fontWeight="bold">
              {blog.title}
            </Text>
            <Text>{blog.summary}</Text>
          </VStack>
          <HStack>
            <Icon as={AiOutlineClockCircle} color="gray.400" />
            <Text fontSize="14px" color="gray.400">
              {blog.timeToRead}
            </Text>
          </HStack>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default BlogCard;
