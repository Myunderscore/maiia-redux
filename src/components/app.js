import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import RequireAuthentification from "../helpers/require-authentification";
import Basket from "./Basket";
import ProductsSearchResult from "./ProductsSearchResult"


require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div className="bg-white">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route
            exact
            path="/basket/"
            component={RequireAuthentification(Basket)}
          />
           <Route exact path="/results/:value" component={ProductsSearchResult} />
        </Switch>
      </div>
    );
  }
}
