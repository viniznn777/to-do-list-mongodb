import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PrivateRoute({ item }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? item : <Navigate to="/login" />;
}

export { PrivateRoute };
