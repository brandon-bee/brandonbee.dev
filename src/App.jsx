import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default App;