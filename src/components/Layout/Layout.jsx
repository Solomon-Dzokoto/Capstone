import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden  items-start ">
      <Sidebar />
      <main className="">
        <Header />
        <div className="h-[calc(100vh-68px)] flex flex-col p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
