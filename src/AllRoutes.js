import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMeOther from "./screens/AboutMeOther";
import AboutMeTech from "./screens/AboutMeTech";
import AppScreen from "./screens/AppScreen";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<AppScreen />} />
        <Route path={"/about-me/tech"} element={<AboutMeTech />} />
        <Route path={"/about-me/other"} element={<AboutMeOther />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
