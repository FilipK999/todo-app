import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Drawer from "./components/Drawer";
import { CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import { darkTheme, theme } from "./utils/theme";
import { useSelector } from "react-redux";
import Login from "./containers/Login";

function App() {
  const app = useSelector(state => state.app);

  return (
    <ThemeProvider theme={!app.theme ? darkTheme : theme}>
      <CssBaseline />
      <React.Fragment>
        {/* TODO: Display drawer only when logged in */}
        {/* <Drawer></Drawer> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
