import { HStack, Link, VStack, Text } from "@chakra-ui/react";

import Logo from "theme/Icons/Logo";

const externalLinks = [
  { id: 1, url: "https://www.github.com/DevCeur", text: "GitHub" },
  {
    id: 2,
    url: "https://www.linkedin.com/in/dev-carlos-umana",
    text: "Linked In",
  },
  {
    id: 3,
    url: "https://torre.co/DevCeur?utm_source=copy-paste",
    text: "Torre",
  },
];

const Footer = () => {
  return (
    <VStack
      spacing={4}
      mt={24}
      py={12}
      borderTop="1px"
      borderTopColor="gray.100"
    >
      <VStack spacing={4} mb={8}>
        <Logo fontSize="6xl" color="gray.600" />
        <Text fontSize="sm">
          Carlos U. - Created with &#128420; and &#9883;️
        </Text>
      </VStack>
      <HStack spacing={4}>
        {externalLinks.map((link) => (
          <Link
            px={4}
            borderX="1px"
            borderColor="gray.200"
            key={link.id}
            href={link.url}
            isExternal
            fontSize="sm"
            color="gray.400"
          >
            {link.text}
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default Footer;
