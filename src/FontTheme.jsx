import { createMuiTheme } from "@mui/material";

export const THEME = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  },
});
