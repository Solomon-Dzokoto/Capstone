import Layout from "@components/Layout/Layout.jsx";
import EmployeeUi from "@/components/shared/EmployeeUi";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/components/Layout/AuthLayout";
import Login from "@/components/pages/Auth/Login";
import Signup from "@/components/pages/Auth/Signup";
import { Toaster } from "sonner";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<EmployeeUi />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
      <Toaster richColors />
    </div>
  );
};

export default App;
