import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "gray.800",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.600",
      },
    },
  },
});

export default theme;
