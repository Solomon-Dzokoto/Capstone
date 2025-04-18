import Layout from "@components/Layout/Layout.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/components/Layout/AuthLayout";
import Login from "@/components/pages/Auth/Login";
import Signup from "@/components/pages/Auth/Signup";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";
import Spinner from "./components/ui/Spinner";
import ProtectedRoute from "./components/Layout/ProtectedRoute";

const EmployeeUi = lazy(() =>
  import("@/components/shared/Employee/EmployeeUi")
);
const EmployeeDetailsPage = lazy(() =>
  import("@/components/shared/Employee/EmployeeDetailPage")
);
const RoleView = lazy(() => import("@/components/shared/Roles/RoleView"));
const CreateNewRole = lazy(() =>
  import("@/components/shared/Roles/CreateNewRole")
);
const PayrollPage = lazy(() =>
  import("@/components/shared/Payroll/PayrollPage")
);
const ReportPage = lazy(() => import("@/components/shared/Report/ReportPage"));
const SettingsPage = lazy(() =>
  import("@/components/shared/Settings/SettingsPage")
);
const NotFound = lazy(() => import("@/components/pages/NotFound"));
const DashboardPage = lazy(() =>
  import("@components/shared/Dashboard/DashboardPage")
);
const PayrollDetails = lazy(() =>
  import("@/components/shared/Payroll/PayrollDetails")
);
const ProcessPayment = lazy(() =>
  import("@/components/shared/Payroll/ProcessPayment")
);
const RolePage = lazy(() => import("@/components/shared/Roles/RolePage"));

const App = () => {
  return (
    <div className="relative">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="/" element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="employees">
                <Route index element={<EmployeeUi />} />
                <Route path=":id" element={<EmployeeDetailsPage />} />
              </Route>
              <Route path="roles">
                <Route index element={<RoleView />} />
                <Route path=":id" element={<RolePage />} />
                <Route path="create-role" element={<CreateNewRole />} />
              </Route>
              <Route path="payroll">
                <Route index element={<PayrollPage />} />
                <Route path=":id" element={<PayrollDetails />} />
                <Route path=":id/process" element={<ProcessPayment />} />
              </Route>
              <Route path="report" element={<ReportPage />} />
              <Route path="setting" element={<SettingsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster richColors />
    </div>
  );
};

export default App;
