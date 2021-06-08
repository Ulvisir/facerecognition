import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 70 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />{" "}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
