import { Outlet, Navigate } from "react-router";
import { Auth } from "../utils/Auth";
import Layout from "../components/Layout";

function PrivateRoutes() {
  const { token } = Auth.isAuthorization();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default PrivateRoutes;
