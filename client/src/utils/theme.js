import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { lightBlue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: lightBlue[500]
    },
    secondary: {
      main: red.A200
    },
    error: {
      main: red.A700
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: lightBlue[500]
    },
    secondary: {
      main: red.A200
    },
    error: {
      main: red.A700
    }
  }
});
