import { createTheme } from "@mui/material";

import { colors } from "./colors";

 const theme = createTheme({
  spacing: (factor) => `${1 * factor}rem`,
  colors: colors,
  borderRadius:`1rem`
});

export default theme