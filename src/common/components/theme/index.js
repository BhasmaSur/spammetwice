import { createTheme } from "@mui/material";
const theme = createTheme();

theme.palette.primary = {
  main: "#890",
};

theme.palette.secondary = {
  main: "#987"
}
theme.typography.h1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
export default theme;
