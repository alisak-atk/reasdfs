import Login from "../components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Sidenav from "../components/sidebar/sidebar1";

function AppRouterLogin() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Sidenav />} />
    </Routes>
  )
}

export default AppRouterLogin