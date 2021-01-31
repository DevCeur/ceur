import { Box, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box
      as="nav"
      w="85%"
      maxW="1124px"
      mx="auto"
      py={6}
      borderBottom="1px"
      borderBottomColor="gray.200"
    >
      <Text>Navigation</Text>
    </Box>
  );
};

export default Navigation;
