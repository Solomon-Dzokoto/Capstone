import Layout from "@components/Layout/Layout.jsx";
import EmployeeUi from "@/components/shared/EmployeeUi";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<EmployeeUi />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
