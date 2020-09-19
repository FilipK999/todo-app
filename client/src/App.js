import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Drawer from "./components/Drawer";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { darkTheme, theme } from "./utils/theme";
import { useDispatch, useSelector } from "react-redux";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { authActions } from "./actions";

function App() {
  const app = useSelector(state => state.app);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.checkUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={!app.theme ? darkTheme : theme}>
      <CssBaseline />
      <React.Fragment>
        {auth.user && <Drawer {...{ user: auth.user }} />}
        <Switch>
          {auth.user && (
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          )}
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard">
            <Dashboard {...{ user: auth.user }} />
          </Route>
          <Route exact path="/register" component={Register} />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
