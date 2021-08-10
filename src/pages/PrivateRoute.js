import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  // const { user } = useAuth0();
  const { myUser } = useSelector((state) => state.protectRouteReducer);
  // console.log(myUser);

  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to="/"></Redirect>;
      }}
    >
      Private Route
    </Route>
  );
};

export default PrivateRoute;
