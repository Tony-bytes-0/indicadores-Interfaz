import { createTheme } from "@mui/material";

export const redAsterisk = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {color:"red"},
        },
      },
    },
  })