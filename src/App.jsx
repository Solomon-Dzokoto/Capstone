import Layout from "@components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/components/Layout/AuthLayout";
import Login from "@/components/pages/Auth/Login";
import Signup from "@/components/pages/Auth/Signup";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";
import { Spinner } from "@/global/Icons";

const EmployeeUi = lazy(() =>
  import("@/components/shared/Employee/EmployeeUi")
);
const Role = lazy(() => import("@/components/shared/Roles/Role"));
const RoleView = lazy(() => import("@/components/shared/Roles/RoleView"));
const RolePage = lazy(() => import("@/components/shared/Roles/RolePage"));
const CreateNewRole = lazy(() =>
  import("@/components/shared/Roles/CreateNewRole")
);
const NotFound = lazy(() => import("@/components/pages/NotFound"));
const DashboardPage = lazy(() =>
  import("@components/shared/Dashboard/DashboardPage")
);
const App = () => {
  return (
    <div className="">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spinner className="w-[15rem] h-[15rem] " />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="employees" element={<EmployeeUi />} />
            <Route path="roles" element={<RoleView />} />
            <Route path="payroll" element={<Role />} />
            <Route path="report" element={<RolePage />} />
            <Route path="setting" element={<CreateNewRole />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster richColors />
      </Suspense>
    </div>
  );
};

export default App;
