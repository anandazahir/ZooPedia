import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../api/Auth";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoutes;
