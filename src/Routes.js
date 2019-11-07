import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Table from "./containers/Table"
import NotFound from "./containers/NotFound";

export default function() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/table" exact component={Table} />
      <Route component={NotFound} />
    </Switch>
  );
}