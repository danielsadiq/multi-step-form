import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return <div className="block md:grid grid-cols-[20rem_1fr] md:gap-24">
		<Sidebar/>
		<div>
			<Outlet/>
		</div>
	</div>;
}

export default AppLayout;
