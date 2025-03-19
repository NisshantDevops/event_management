import React from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const isAuthenticated = false; // Replace with actual authentication check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthProtected;
