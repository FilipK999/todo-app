import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Drawer from "./components/Drawer";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { darkTheme } from "./utils/theme";
import { useSelector } from "react-redux";

function App() {
  const app = useSelector(state => state.app);

  return (
    <ThemeProvider theme={!app.theme && darkTheme}>
      <CssBaseline />
      <React.Fragment>
        <Drawer></Drawer>
        <Grid container justify="center" style={{ padding: 10 }}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Grid>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
