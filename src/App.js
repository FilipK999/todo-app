import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
