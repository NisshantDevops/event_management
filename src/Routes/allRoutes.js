import React from "react";
import { Navigate } from "react-router-dom";




//login
//import Login from "../pages/Authentication/Login";
// import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Login from '../pages/Authentication/Login';
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";


const authProtectedRoutes = [
 
  

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page

  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },


];

export { authProtectedRoutes, publicRoutes };