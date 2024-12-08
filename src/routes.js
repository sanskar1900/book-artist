import React from "react";
import { Routes, Route } from "react-router-dom";
// import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/homepage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
    </Routes>
  );
}

export default AppRoutes;
