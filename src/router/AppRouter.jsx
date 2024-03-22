import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard";
import Campaigns from "../components/Pages/Campaigns";
import EmailTemplates from "../components/Pages/EmailTemplates";
import LandingPages from "../components/Pages/LandingPages";
import SendingProfiles from "../components/Pages/SendingProfiles";
import UserGroup from "../components/Pages/UserGroup";
import UserMangement from "../components/Pages/UserManagement";

function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/groups" element={<UserGroup />} />
      <Route path="/templates" element={<EmailTemplates />} />
      <Route path="/landing-pages" element={<LandingPages />} />
      <Route path="/sending-profiles" element={<SendingProfiles />} />
      <Route path="/users" element={<UserMangement />} />
    </Routes>
  );
}

export default AppRouter;
