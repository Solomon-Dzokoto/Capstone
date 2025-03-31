import usePermissions from "@contexts/PermissionContext";
import ToggleSwitch from "@components/ui/ToggleSwitch";
import { Details, ProfileAvatar } from "@global/Icons";

const RolePermissionCard = () => {
	const { permissions, togglePermission } = usePermissions();

	return (
		<div className="p-4">
			<div className="flex items-start gap-3 mb-4">
				<ProfileAvatar className="w-8 h-8" />
				<div>
					<h3 className="text-lg font-semibold text-gray-900">Manager</h3>
					<p className="text-sm text-gray-600">Set permissions for managers</p>
				</div>
			</div>
			<div className="h-[714px] max-md:mt-8 max-md:max-w-full">
				<div className="px-9 pt-9 max-w-full rounded-2xl border border-solid border-border w-auto max-md:pl-5">
					<h2 className="max-w-full text-xl font-black min-h-[34px] text-subText w-[216px]">
						Role permissions
					</h2>
					<hr className="mt-6 h-px bg-border max-md:max-w-full" />

					<div className="mt-6 w-full max-md:mr-0.5 max-md:max-w-full">
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
							className="mt-8"
						/>

						<ToggleSwitch
							enabled={permissions.accessNewHires}
							onToggle={() => togglePermission("accessNewHires")}
							title="Access to new hires"
							description="Can create job posting and manage new hires"
							className="mt-8"
						/>

						<ToggleSwitch
							enabled={permissions.accessSettings}
							onToggle={() => togglePermission("accessSettings")}
							title="Access to Settings"
							description="Employees in this role can edit company info and password"
							className="mt-8"
						/>

						<ToggleSwitch
							enabled={permissions.accessDashboard}
							onToggle={() => togglePermission("accessDashboard")}
							title="Access to dashboard data and reports"
							description="This allows access generate reports and modify"
							className="mt-8"
						/>

						<ToggleSwitch
							enabled={permissions.modifyEmployee}
							onToggle={() => togglePermission("modifyEmployee")}
							title="Can add or delete employee"
							description="This enables general access to employee information"
							className="mt-8"
						/>

						<ToggleSwitch
							enabled={permissions.modifyRoles}
							onToggle={() => togglePermission("modifyRoles")}
							title="Can add/edit roles"
							description="This enables general access to creating or modifying roles"
							className="mt-8"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RolePermissionCard;
