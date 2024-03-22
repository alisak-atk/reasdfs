import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidenav from "./components/sidebar/sidebar1";
import Login from "./components/Login/Login";
import Sidenav_v from "./components/sidebar/sidebar";
import PageLogin from "./router/PageLogin";

function App() {
  return (
    <BrowserRouter>
      <Sidenav />
    </BrowserRouter>
  );
}

export default App;
