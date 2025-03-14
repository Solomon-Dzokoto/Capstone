import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="">
      <div className="flex items-start">
        <Sidebar />
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
