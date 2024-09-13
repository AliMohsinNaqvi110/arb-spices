// src/theme/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Merriweather', serif`,
    body: `'Merriweather', sans-serif`,
  },
  colors: {
    primary: {
      50: "#f8f6e8",
      100: "#ffde59",
    },
    secondary: {
      50: "#0f0000"
    }
  },
});

export default theme;
