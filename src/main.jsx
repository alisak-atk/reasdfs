import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";

// import Login from './components/Login/Login.jsx'
// import Sidenav from './components/sidebar/sidebar1.jsx'
// import Dashboard from './components/Pages/Dashboard.jsx'
// import Campaigns from './components/Pages/Campaigns.jsx'
// import UserGroup from './components/Pages/UserGroup.jsx'
// import EmailTemplates from './components/Pages/EmailTemplates.jsx'
// import LandingPages from './components/Pages/LandingPages.jsx'
// import SendingProfiles from './components/Pages/SendingProfiles.jsx'
// import UserManagement from './components/Pages/UserManagement.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/Home",
//     element: <Sidenav />,
//   }
//   {
//     path: "/campaigns",
//     element: <Campaigns/>,
//   },
//   {
//     path: "/groups",
//     element: <UserGroup/>,
//   },
//   {
//     path: "/templates",
//     element: <EmailTemplates/>,
//   },
//   {
//     path: "/landing-pages",
//     element: <LandingPages/>,
//   },
//   {
//     path: "/sending-profiles",
//     element: <SendingProfiles/>,
//   },
//   {
//     path: "/users",
//     element: <UserManagement/>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* // <RouterProvider router={router} /> */}
    <App/>
  </React.StrictMode>,
)
