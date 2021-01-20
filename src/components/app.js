import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import Home from "./Home";
import Products from "./Products";
import RequireAuthentification from "../helpers/require-authentification";
import Basket from "./Basket";

require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div className="bg-white">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={Products} />
          <Route
            exact
            path="/basket/"
            component={RequireAuthentification(Basket)}
          />
        </Switch>
      </div>
    );
  }
}
