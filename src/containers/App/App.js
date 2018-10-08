import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./App.css";
import Home from "../../containers/Home";
import Example from "../../containers/Example";

const routes = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/example",
    component: Example
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="App">
        <Helmet>
          <html lang="ja" amp />
          <meta charSet="utf-8" />
          <title>Custom app title</title>
        </Helmet>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

export default App;
