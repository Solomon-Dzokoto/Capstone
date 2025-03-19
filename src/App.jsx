import Layout from "@components/Layout/Layout.jsx";
import EmployeeUi from "@/components/shared/EmployeeUi";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/components/Layout/AuthLayout";
import Login from "@/components/pages/Auth/Login";
import Signup from "@/components/pages/Auth/Signup";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";
import { Spinner } from "@/global/Icons";

const Role = lazy(() => import("@components/shared/Role"));
const NotFound = lazy(() => import("@components/pages/NotFound"));
const App = () => {
  return (
    <div className="">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spinner className="w-[30rem] h-[30rem] " />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EmployeeUi />} />
            <Route path="employees" element={<EmployeeUi />} />
            <Route path="roles" element={<Role />} />
            <Route path="payroll" element={<Role />} />
            <Route path="report" element={<Role />} />
            <Route path="setting" element={<Role />} />
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
