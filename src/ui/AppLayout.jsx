import Sidebar from "./Sidebar";
import Main from './Main';

function AppLayout() {
  return <div className="block md:grid grid-cols-[20rem_1fr] md:gap-24">
		<Sidebar/>
		<Main/>
	</div>;
}

export default AppLayout;
