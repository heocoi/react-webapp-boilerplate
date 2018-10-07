import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/logo.svg";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import "./App.css";

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
        <Typography variant="subheading" className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          App secret code is: <ins>{process.env.REACT_APP_SECRET_CODE}</ins>
        </Typography>
        <div>
          Ready to use Material UI <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            @material-ui/core: <Button variant="outlined">Button</Button> <br />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            @material-ui/icons: <MailIcon />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            @material-ui/lab:
            <Slider
              value={80}
              aria-labelledby="label"
              onChange={() => {}}
              style={{ width: 120, display: "inline-block" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
