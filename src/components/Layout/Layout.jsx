import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
import { PermissionsProvider } from "../../contexts/PermissionContext";

const Layout = () => {
  return (
    <div className="flex h-screen w-svw  items-start ">
      <PermissionsProvider>
        <Sidebar />
        <main className=" w-[calc(100vw-15rem)] flex-1">
          <Header />
          <div className="h-[calc(100vh-68px)]  flex flex-col px-6 py-4 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </PermissionsProvider>
    </div>
  );
};

export default Layout;
