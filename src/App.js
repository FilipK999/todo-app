import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container justify="center" style={{ padding: 10 }}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Grid>
  );
}

export default App;
