// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    // If no user logged in → redirect to Login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
