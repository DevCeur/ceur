import Image from "next/image";

import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";

import Logo from "theme/Icons/Logo";

import PageWrapper from "components/PageWrapper";

const BlogLayout = ({ blog, content }) => {
  return (
    <PageWrapper title={blog.title}>
      <Flex direction="column">
        <Heading as="h1" size="2xl" lineHeight={1.2} mb={6}>
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
        <Image
          src={blog.image}
          objectFit="cover"
          layout="fill"
          alt={blog.title}
          priority={true}
        />
      </Box>
      <Box my={8}>{content}</Box>
    </PageWrapper>
  );
};

export default BlogLayout;
