import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#C9082A",
    },
    secondary: {
      main: "#17408B",
    },
    error: {
      main: red.A700,
    },
  },
});

export default theme;
