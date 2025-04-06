import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
import { PermissionsProvider } from "@contexts/PermissionContext";
import { useModal } from "../../store/useModal";
import Modal from "../ui/Modal";
import AssignNewRoleModal from "../ui/AssignNewRoleModal";
import { useAssignEmployee } from "../../store/useUserDetails";
import { useState } from "react";
import { ThemeProvider } from "../../contexts/ThemeContext";

const Layout = () => {
	const modal = useModal((state) => state.modal);
	const user = useAssignEmployee((state) => state?.user);
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<ThemeProvider>
			<div className="flex h-screen relative overflow-hidden bg-[#FAFBFB] dark:bg-dark-bg">
				{modal?.modalState === "open" && modal?.modalType === "assign-role" && (
					<Modal user={user} />
				)}
				{modal?.modalState === "open" &&
					modal?.modalType === "assign-new-role" && <AssignNewRoleModal />}
				<PermissionsProvider>
					<Sidebar isOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
					<main className="flex-1 flex flex-col min-w-0">
						<Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
						<div className="flex-1 overflow-y-auto px-6 py-6">
							<Outlet />
						</div>
					</main>
				</PermissionsProvider>
			</div>
		</ThemeProvider>
	);
};

export default Layout;
