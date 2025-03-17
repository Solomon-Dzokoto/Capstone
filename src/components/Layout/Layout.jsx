import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex items-start ">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
