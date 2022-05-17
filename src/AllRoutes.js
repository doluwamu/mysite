import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppScreen from "./screens/AppScreen";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<AppScreen />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
