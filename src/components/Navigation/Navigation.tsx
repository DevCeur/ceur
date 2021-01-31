import { Box, Heading, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box
      as="nav"
      w="85%"
      maxW="1124px"
      mx="auto"
      py={{ base: 6, md: 8 }}
      borderBottom="1px"
      borderBottomColor="gray.200"
    >
      <Heading>Almost before</Heading>
      <Text>Navigation</Text>
    </Box>
  );
};

export default Navigation;
