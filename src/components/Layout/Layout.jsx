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
		<div className="flex h-screen w-screen relative items-start">
			{modal?.modalState === "open" && modal?.modalType === "assign-role" && (
				<Modal user={user} />
			)}
			{modal?.modalState === "open" &&
				modal?.modalType === "assign-new-role" && <AssignNewRoleModal />}
			<PermissionsProvider>
				<div
					className={`transition-all duration-300 ${
						isSidebarOpen ? "w-60" : "w-0 md:w-20"
					}`}
				>
					<Sidebar
						isOpen={isSidebarOpen}
						onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
					/>
				</div>
				<main
					className={`flex-1 transition-all duration-300 ${
						isSidebarOpen ? "md:ml-0" : "md:ml-0"
					}`}
				>
					<Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
					<div className="h-[calc(100vh-68px)] flex flex-col px-4 md:px-6 py-4 overflow-y-auto">
						<Outlet />
					</div>
				</main>
			</PermissionsProvider>
		</div>
	);
};

export default Layout;
