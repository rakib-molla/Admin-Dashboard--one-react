
import { Outlet } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className='flex'>
      <div className='basis-[15%] h-screen'>
        <Sidebar />
      </div>
      <div className='basis-[85%] h-screen overflow-scroll'>
        <DashboardHeader />
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App