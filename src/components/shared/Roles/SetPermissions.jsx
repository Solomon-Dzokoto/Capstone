import { Details } from "@global/Icons";
import Tooltip from "@components/ui/Tooltip";
import ToggleSwitch from "@components/ui/ToggleSwitch";
import useToggle from "@store/useToggle";
import image from "/assets/pp1.png";

const SetPermissions = () => {
	const { toggle, toggles, updateEnableAll, enableAll } = useToggle();

	return (
		<section className="p-3 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8 mt-4 md:mt-6 lg:mt-8 max-w-7xl mx-auto">
			<div className="border border-border dark:bg-dark-card dark:border-dark-border overflow-hidden rounded-lg md:rounded-2xl">
				{/* Header Section */}
				<div className="flex flex-col sm:flex-row p-4 md:p-6 lg:p-8 border-b items-start sm:items-center dark:bg-dark-card dark:border-dark-border border-b-border justify-between gap-4">
					<div className="w-full sm:w-auto max-w-[500px]">
						<h2 className="text-base md:text-xl lg:text-2xl mb-1 font-semibold">
							Set permissions
						</h2>
						<p className="text-subText text-sm md:text-base lg:text-lg">
							Modify access and permission for team and individuals
						</p>
					</div>
					<div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
						<div className="relative flex-shrink-0">
							<img
								className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full object-cover"
								src={image}
								alt="Profile"
							/>
						</div>
						<div className="flex flex-col">
							<h4 className="text-sm md:text-base lg:text-lg font-medium whitespace-nowrap">
								James Campion
							</h4>
							<p className="text-xs md:text-sm lg:text-base text-subText whitespace-nowrap">
								Reporting manager
							</p>
						</div>
					</div>
				</div>

				{/* Manager Access Section */}
				<article className="p-4 md:p-6 lg:p-8 m-3 md:m-4 lg:m-6 border dark:border-dark-border dark:bg-dark-surface border-border rounded-lg md:rounded-xl lg:rounded-2xl">
					<div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mb-6">
						<h2 className="text-sm md:text-base lg:text-lg font-medium">
							Manager Access
						</h2>
						<div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
							<button
								onClick={() => updateEnableAll("manager")}
								className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 ${
									enableAll.manager ? "bg-primary" : "bg-border"
								} rounded-xl w-10 md:w-12 h-5 md:h-6 transition-colors duration-200`}
								role="switch"
								aria-checked={enableAll.manager}
							>
								<div
									className={`w-4 h-4 md:w-5 md:h-5 bg-white rounded-full transform transition-transform duration-200 ${
										enableAll.manager
											? "translate-x-5 md:translate-x-6"
											: "translate-x-0"
									}`}
								/>
							</button>
							<p className="text-sm md:text-base whitespace-nowrap">
								Enable all
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
						<ToggleSwitch
							enabled={toggles["manager-create-job"]}
							onToggle={() => toggle("manager-create-job")}
							title="Access to new hires"
							description="Can create job posting and manage new hire"
						/>
						<ToggleSwitch
							enabled={toggles["manager-general-access"]}
							onToggle={() => toggle("manager-general-access")}
							title="Can see information about other employees"
							description="Enables access to view employee profile informations Doesn't permit edit access"
						/>
						<ToggleSwitch
							enabled={toggles["manager-delete"]}
							onToggle={() => toggle("manager-delete")}
							title="Can add or delete employee"
							description="This enables general access to employee information"
						/>
						<ToggleSwitch
							enabled={toggles["manager-edit-role"]}
							onToggle={() => toggle("manager-edit-role")}
							title="Can add/edit roles"
							description="This enables general access to creating or modifying roles"
						/>
					</div>
				</article>

				{/* Employee Access Section */}
				<article className="p-4 md:p-6 lg:p-8 m-3 md:m-4 lg:m-6 border dark:border-dark-border dark:bg-dark-surface border-border rounded-lg md:rounded-xl lg:rounded-2xl">
					<div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 mb-6">
						<h2 className="text-sm md:text-base lg:text-lg font-medium">
							Employee Access
						</h2>
						<div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
							<button
								onClick={() => updateEnableAll("employee")}
								className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 ${
									enableAll.employee ? "bg-primary" : "bg-border"
								} rounded-xl w-10 md:w-12 h-5 md:h-6 transition-colors duration-200`}
								role="switch"
								aria-checked={enableAll.employee}
							>
								<div
									className={`w-4 h-4 md:w-5 md:h-5 bg-white rounded-full transform transition-transform duration-200 ${
										enableAll.employee
											? "translate-x-5 md:translate-x-6"
											: "translate-x-0"
									}`}
								/>
							</button>
							<p className="text-sm md:text-base whitespace-nowrap">
								Enable all
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
						<ToggleSwitch
							enabled={toggles["employee-create-job"]}
							onToggle={() => toggle("employee-create-job")}
							title="Access to new hires"
							description="Can create job posting and manage new hire"
						/>
						<ToggleSwitch
							enabled={toggles["employee-general-access"]}
							onToggle={() => toggle("employee-general-access")}
							title="Can see information about other employees"
							description="Enables access to view employee profile informations Doesn't permit edit access"
						/>
						<ToggleSwitch
							enabled={toggles["employee-delete"]}
							onToggle={() => toggle("employee-delete")}
							title="Can add or delete employee"
							description="This enables general access to employee information"
						/>
						<ToggleSwitch
							enabled={toggles["employee-edit-role"]}
							onToggle={() => toggle("employee-edit-role")}
							title="Can add/edit roles"
							description="This enables general access to creating or modifying roles"
						/>
					</div>
				</article>
			</div>
		</section>
	);
};

export default SetPermissions;
