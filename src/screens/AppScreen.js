import React from "react";
import AboutMe from "../components/AboutMe";
import BgImage from "../components/BgImage";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const AppScreen = () => {
  return (
    <div>
      <Navbar />
      <BgImage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default AppScreen;
