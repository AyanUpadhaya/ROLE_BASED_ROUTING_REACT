import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RedirectToDashboard = () => {
    const { user } = useAuth();

  if (user?.role === "user") return <Navigate to="/dashboard/user" />;
  if (user?.role === "admin") return <Navigate to="/dashboard/admin" />;
  return <Navigate to="/login" />;
};


export default RedirectToDashboard;