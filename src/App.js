import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import RightDrawer from "./components/drawer";
import LoginDrawer from "./components/drawer/loginDrawer";

function App() {
  return (
    <Router>
      <Routes />
      <LoginDrawer />
    </Router>
  );
}

export default App;
