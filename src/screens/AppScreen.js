import React from "react";
import AboutMe from "../components/AboutMe";
import BgImage from "../components/BgImage";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const AppScreen = () => {
  return (
    <div>
      <Navbar />
      <BgImage />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default AppScreen;
