import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Products,
  SingleProductPage,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute
} from "./pages";
import { Navbar, Sidebar, Footer } from "./component";
import { Provider } from "react-redux";

import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
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
          <Route exact path="/Products/:id" >
          <SingleProductPage/>
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
    </Provider>
  );
}

export default App;
