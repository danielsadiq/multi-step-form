import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="block md:grid grid-cols-[20rem_600px] md:gap-24">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
