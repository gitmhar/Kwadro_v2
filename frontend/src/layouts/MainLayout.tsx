import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navigations/Navbar";
import Sidebar from "../components/ui/navigations/Sidebar";

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
