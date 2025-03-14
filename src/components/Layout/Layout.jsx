import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
