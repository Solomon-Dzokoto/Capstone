import { Outlet, Navigate, useLocation } from "react-router-dom";
import useUser from "@store/useUser";

const ProtectedRoute = () => {
	const location = useLocation();
	const access = localStorage.getItem("access_token");

	if (!access) {
		return <Navigate to="/auth/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
