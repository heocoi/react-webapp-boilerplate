import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { LocalizeProvider } from "react-localize-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <Router>
        <App />
      </Router>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
