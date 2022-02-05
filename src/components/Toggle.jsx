import React from "react";
import { connect } from "react-redux";
import "../styles/Toggle.css";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";
import { toggle } from "../actions";

const Toggle = ({ darkMode, toggle }) => {
  return (
    <div className="Toggle">
      <img src={Sun} alt="" className="Toggle-icon" />
      <img src={Moon} alt="" className="Toggle-icon" />
      <div className="Toggle-button" onClick={toggle} style={{
        left: darkMode ? 0 : 25
      }}></div>
    </div>
  );
};

const MapStateToProps = (state) => {
  return({
    darkMode: state.darkMode
  });
};

export default connect(MapStateToProps, { toggle })(Toggle);