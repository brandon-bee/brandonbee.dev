import React from "react";
import { connect } from "react-redux";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";

const App = ({ darkMode }) => {
  return (
    <div className="App" style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white"
    }}>
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

const MapStateToProps = (state) => {
  return({
    darkMode: state.darkMode
  });
};

export default connect(MapStateToProps)(App);