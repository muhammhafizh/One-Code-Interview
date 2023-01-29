import { Outlet } from "react-router";
import NavbarComponent from "./Navbar";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default Layout;
