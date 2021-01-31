import NextLink from "next/link";
import { Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex
      as="nav"
      w="85%"
      maxW="1124px"
      mx="auto"
      py={{ base: 6, md: 8 }}
      borderBottom="1px"
      borderBottomColor="gray.200"
      align="center"
      justify="space-between"
    >
      <HStack
        w={{ base: "100%", md: "65%" }}
        spacing={6}
        justify={{ base: "space-between", md: "flex-start" }}
      >
        <NextLink href="/" passHref>
          <Link _hover={{ textDecor: "none" }}>
            <Heading as="h2">Carlos U.</Heading>
          </Link>
        </NextLink>
        <HStack pl={{ base: 0, md: 6 }}>
          <Text>Internal Links</Text>
        </HStack>
      </HStack>
      <HStack display={{ base: "none", md: "flex" }}>
        <Text>Social Links</Text>
      </HStack>
    </Flex>
  );
};

export default Navigation;
