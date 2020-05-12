import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from "./Item";
import Basket from "./Basket";
import ItemListing from "./ItemListing";

function Pages() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/Basket">Basket</Link>
            </li>
          </ul>
        </nav>

        <h1>SHA eshop</h1>
        <Switch>
          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/Basket">
            <Basket />
          </Route>
          <Route path="/">
            <ItemListing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Pages;
