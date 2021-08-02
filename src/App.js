import React, { useEffect } from "react";
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
} from "./pages";
import { Navbar, Sidebar, Footer } from "./component";
import { Provider, useDispatch } from "react-redux";

import store from "./redux/store/store";
import AddToCartProduct from "./redux/action/AddToCartAction";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("cart==>", cart);
  //   if (cart && cart.length > 0) {
  //     dispatch(AddToCartProduct(JSON.parse(localStorage.getItem("cart"))));
  //   }
  // }, []);
  return (
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

        <Route exact path="/Checkout">
          <Checkout />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
