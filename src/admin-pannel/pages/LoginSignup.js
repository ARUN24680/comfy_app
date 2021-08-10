import React from "react";
import { SignUp, SignIn } from "../component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LoginSignup = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/SignIn">
            <SignIn />
          </Route>

          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default LoginSignup;
