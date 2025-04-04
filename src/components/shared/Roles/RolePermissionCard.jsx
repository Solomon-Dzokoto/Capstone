import usePermissions from "@contexts/PermissionContext";
import ToggleSwitch from "@components/ui/ToggleSwitch";
import { Details, ProfileAvatar } from "@global/Icons";
import { EditPen } from "../../../global/Icons";

const RolePermissionCard = () => {
	const { permissions, togglePermission } = usePermissions();

	return (
		<div className="w-full lg:w-1/2">
			<div className="bg-white dark:bg-dark-surface rounded-xl border border-border dark:border-dark-border p-4 md:p-6 lg:p-8">
				<div className="flex items-start gap-4 mb-6">
					<ProfileAvatar className="w-8 h-8 text-subText dark:text-dark-subText" />
					<div className="flex-1">
						<h3 className="text-lg font-semibold text-dark dark:text-dark-text">
							Manager
						</h3>
						<p className="text-sm text-subText dark:text-dark-subText">
							Set permissions for managers
						</p>
					</div>
				</div>

				<div className="space-y-6">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-bold text-dark dark:text-dark-text">
							Role permissions
						</h2>
						<EditPen className="w-5 h-5 text-subText dark:text-dark-subText" />
					</div>

					<hr className="border-border dark:border-dark-border" />

					<div className="space-y-6">
						<ToggleSwitch
							enabled={permissions.addDeleteEmployee}
							onToggle={() => togglePermission("addDeleteEmployee")}
							title="Can add or delete employee"
							description="This enables general access to employee information"
						/>

						<ToggleSwitch
							enabled={permissions.addEditRoles}
							onToggle={() => togglePermission("addEditRoles")}
							title="Can add/edit roles"
							description="Can create job postings and manage new hires"
						/>

						<ToggleSwitch
							enabled={permissions.accessNewHires}
							onToggle={() => togglePermission("accessNewHires")}
							title="Access to new hires"
							description="Can create job posting and manage new hires"
						/>

						<ToggleSwitch
							enabled={permissions.accessSettings}
							onToggle={() => togglePermission("accessSettings")}
							title="Access to Settings"
							description="Employees in this role can edit company info and password"
						/>

						<ToggleSwitch
							enabled={permissions.accessDashboard}
							onToggle={() => togglePermission("accessDashboard")}
							title="Access to dashboard data and reports"
							description="This allows access generate reports and modify"
						/>

						<ToggleSwitch
							enabled={permissions.modifyEmployee}
							onToggle={() => togglePermission("modifyEmployee")}
							title="Can add or delete employee"
							description="This enables general access to employee information"
						/>

						<ToggleSwitch
							enabled={permissions.modifyRoles}
							onToggle={() => togglePermission("modifyRoles")}
							title="Can add/edit roles"
							description="This enables general access to creating or modifying roles"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RolePermissionCard;
