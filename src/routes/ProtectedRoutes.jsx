import { Outlet, Navigate } from "react-router";
import { Auth } from "../utils/Auth";

function ProtectedRoutes() {
  const { token } = Auth.isAuthorization();
  if (token) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
