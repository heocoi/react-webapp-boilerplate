import React from "react";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
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
};

export default Home;
