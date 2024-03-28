import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardPage from "@/pages/DashboardPage";
import CampaignsPage from "@/pages/CampaignsPage";
import UserAndGroupPage from "@/pages/UserAndGroupPage";
import EmailTemplatesPage from "@/pages/EmailTemplatesPage";
import LandingPage from "@/pages/LandingPage";
import SendingProfilesPage from "@/pages/SendingProfilesPage";
import UserManagementPage from "@/pages/UserManagementPage";
import LoginPage from "@/pages/LoginPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/campaigns",
    element: <CampaignsPage />,
  },
  {
    path: "/user-and-group",
    element: <UserAndGroupPage />,
  },
  {
    path: "/email-templates",
    element: <EmailTemplatesPage />,
  },
  {
    path: "/landing-pages",
    element: <LandingPage />,
  },
  {
    path: "/sending-profiles",
    element: <SendingProfilesPage />,
  },
  {
    path: "/user-management",
    element: <UserManagementPage />,
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
