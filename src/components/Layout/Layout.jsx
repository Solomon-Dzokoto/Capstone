import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import { Outlet } from "react-router-dom";
import { PermissionsProvider } from "@contexts/PermissionContext";
import { useModal } from "../../store/useModal";
import Modal from "../ui/Modal";
import AssignNewRoleModal from "../ui/AssignNewRoleModal";
import { useUserDetail } from "../../store/useUserDetails";
import { useState } from "react";

const Layout = () => {
	const modal = useModal((state) => state.modal);
	const user = useUserDetail((state) => state?.user);
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div className="flex h-screen relative overflow-hidden">
			{modal?.modalState === "open" && modal?.modalType === "assign-role" && (
				<Modal user={user} />
			)}
			{modal?.modalState === "open" &&
				modal?.modalType === "assign-new-role" && <AssignNewRoleModal />}
			<PermissionsProvider>
				<div
					className={`flex-shrink-0 transition-all duration-300 ${
						isSidebarOpen ? "w-60" : "w-0 md:w-20"
					}`}
				>
					<Sidebar
						isOpen={isSidebarOpen}
						onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
					/>
				</div>
				<main className="flex-1 flex flex-col min-w-0">
					<Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
					<div className="flex-1 overflow-y-auto">
						<Outlet />
					</div>
				</main>
			</PermissionsProvider>
		</div>
	);
};

export default Layout;
