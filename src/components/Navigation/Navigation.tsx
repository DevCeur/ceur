import NextLink from "next/link";

import { Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

import { ROUTE } from "utils/enum";

import Navlink from "components/Navlink";

const Navigation = () => {
  return (
    <Flex
      as="nav"
      w="85%"
      maxW="1000px"
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
        <NextLink href={ROUTE.HOME} passHref>
          <Link _hover={{ textDecor: "none" }}>
            <Heading as="h2">Carlos U.</Heading>
          </Link>
        </NextLink>
        <HStack
          ml={{ base: 0, md: 12 }}
          pl={{ base: 0, md: 8 }}
          spacing={{ base: 0, md: 4 }}
          borderLeft="1px"
          borderColor={{ base: "transparent", md: "gray.200" }}
        >
          <Navlink href={ROUTE.HOME} hideOnMobile>
            Home
          </Navlink>
          <Navlink href={ROUTE.BLOG}>Blog</Navlink>
          <Navlink href={ROUTE.ABOUT} hideOnMobile>
            About
          </Navlink>
        </HStack>
      </HStack>
      <HStack display={{ base: "none", md: "flex" }}>
        <Link
          fontSize="3xl"
          color="gray.400"
          href="https://www.github.com/DevCeur"
          isExternal
          _hover={{ color: "blue.500" }}
        >
          <AiFillGithub />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navigation;
