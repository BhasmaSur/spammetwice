import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#9C8BEF",
    },
    secondary: {
      main: "#987",
    },
  },
  typography: {
    fontFamily: `"Mukta", sans-serif`,
  },
});

// theme.palette.primary = {
//   main: "#9C8BEF",
// };

// theme.palette.secondary = {
//   main: "#987"
// }
theme.typography.h1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

// theme.typography.fontFamily =[
//   'Dancing Script',
//   'cursive'
// ].join(',');
export default theme;
