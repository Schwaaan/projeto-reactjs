import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "../login/LoginScreen";
import Menu from "../home/Menu.js";
  

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Menu />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

