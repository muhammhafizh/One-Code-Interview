import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FormLogin from "../pages/FormLogin";
import LoginHome from "../pages/LoginHome";
import PostDetailsPage from "../pages/PostDetails";
import ProfilePage from "../pages/ProfilePage";
import Layout from "../components/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoutes from "./PrivateRoutes";

function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/login" element={<FormLogin />} />
        </Route>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/home" element={<LoginHome />} />
          <Route path="/details/:id" element={<PostDetailsPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutesPage;
