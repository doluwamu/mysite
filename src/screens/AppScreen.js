import React, { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import BgImage from "../components/BgImage";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Aos from "aos";

const AppScreen = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 50,
    });
  });

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
