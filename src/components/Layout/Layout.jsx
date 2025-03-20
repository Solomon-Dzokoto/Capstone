import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden  w-screen items-start ">
      <Sidebar />
      <main className="w-fit">
        <Header />
        <div className="h-[calc(100vh-68px)] flex flex-col overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
