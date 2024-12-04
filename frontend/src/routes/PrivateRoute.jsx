import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function PrivateRoute({ role }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user?.role !== role) return <Navigate to={`/dashboard/${user?.role}`} />;
  return <Outlet />;
}

export default PrivateRoute;
