import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


const ProtectedRoute = ({ children }) => {
  const { connected, loading } = useAuth();

  if (loading) return null;

  if (connected) return children;

  return <Navigate to="/Signin" replace />;
};

export default ProtectedRoute;