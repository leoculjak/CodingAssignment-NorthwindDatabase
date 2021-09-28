import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Product";
import Supplier from "./Supplier";
import Order from "./Order";
import Home from "./Home";

export default function Navbar() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Northwind
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/suppliers">
                    Suppliers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
                  <Switch>
                    <Route path="/suppliers">
                      <Supplier />
                    </Route>
                    <Route path="/products">
                      <Product />
                    </Route>
                    <Route path="/orders">
                      <Order />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
      </Router>
    </div>
  );
}
