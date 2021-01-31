import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Space Grotesk', sans-serif",
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
