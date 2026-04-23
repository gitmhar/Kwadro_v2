import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/Navbar";
import Sidebar from "../components/partials/Sidebar";

export default function MainLayout() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
