import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";

import { Provider } from "react-redux";
import store from "./redux/store/store";
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-98rs566y.us.auth0.com"
      clientId="fo4VTc5aSHxF3Oa4HtC38QW2l7leiLzg"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
