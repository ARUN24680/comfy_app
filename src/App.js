import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Products,
  SingleProductPage,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./component";

function App() {
  return (
    <>
      <AuthWrapper>
        <Router>
          <Navbar />
          <Sidebar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/About">
              <About />
            </Route>

            <Route exact path="/Cart">
              <Cart />
            </Route>

            <Route exact path="/Products">
              <Products />
            </Route>

            <Route exact path="/Products/:id">
              <SingleProductPage />
            </Route>

            <PrivateRoute exact path="/Checkout">
              <Checkout />
            </PrivateRoute>

            <Route path="*">
              <Error />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </AuthWrapper>
    </>
  );
}

export default App;
