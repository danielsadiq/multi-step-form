import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="block md:grid grid-cols-[20rem_600px] md:gap-24 bg-white">
      <Sidebar />
        <div className="bg-white m-4 relative top-[-6rem] rounded-xl p-4 md:m-0 md:block md:top-0 md:rounded-none">
      <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
