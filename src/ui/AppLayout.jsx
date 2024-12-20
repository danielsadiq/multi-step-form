import Sidebar from "./Sidebar";
import Main from './Main';

function AppLayout() {
  return <div className="block md:grid grid-cols-[26rem_1fr]">
		<Sidebar/>
		<Main/>
	</div>;
}

export default AppLayout;
