import { Details } from "@global/Icons";
import Tooltip from "@components/ui/Tooltip";
import ToggleSwitch from "@components/ui/ToggleSwitch";
import useToggle from "@store/useToggle";
import image from "/assets/pp1.png";

const SetPermissions = () => {
	const { toggle, toggles, updateEnableAll, enableAll } = useToggle();

	return (
		<section className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 lg:space-y-10 mt-8">
			<div className="border border-border dark:bg-dark-card dark:border-dark-border overflow-hidden rounded-2xl">
				<div className="flex p-6 sm:p-8 lg:p-10 border-b items-center dark:bg-dark-card dark:border-dark-border border-b-border justify-between">
					<div className="">
						<h2 className="text-lg sm:text-xl lg:text-2xl mb-1 font-semibold">
							Set permissions
						</h2>
						<p className="text-subText text-sm sm:text-base lg:text-lg">
							Modify access and permission for team and individuals
						</p>
					</div>
					<div className="flex gap-2 sm:gap-3 lg:gap-4">
						<div className="relative">
							<img
								className="size-10 sm:size-12 lg:size-14"
								src={image}
								alt=""
							/>
						</div>
						<div className="">
							<h4 className="text-sm sm:text-base lg:text-lg">James Campion</h4>
							<p className="text-sm sm:text-base lg:text-lg text-subText">
								Reporting manager
							</p>
						</div>
					</div>
				</div>
				<article className="py-7 px-5 sm:py-8 sm:px-6 lg:py-10 lg:px-8 m-6 sm:m-8 lg:m-10 border dark:border-dark-border dark:bg-dark-surface border-border rounded-2xl">
					<div className="flex justify-between">
						<h2 className="text-sm sm:text-base lg:text-lg">Manager Access</h2>
						<div className="flex gap-2 sm:gap-3 lg:gap-4">
							<button
								onClick={() => updateEnableAll("manager")}
								className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 my-auto ${
									enableAll.manager ? "bg-primary" : "bg-border"
								} rounded-xl min-h-5 w-[2.3rem] transition-colors duration-200`}
								role="switch"
								aria-checked={enableAll.manager}
							>
								<div
									className="flex my-auto w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-white rounded-full min-h-4 transition-transform duration-200"
									style={{
										transform: enableAll.manager
											? "translateX(100%)"
											: "translateX(0)",
									}}
								/>
							</button>
							<p className="text-sm sm:text-base lg:text-lg">Enable all</p>
						</div>
					</div>

					<div className="grid gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:gap-x-6 lg:gap-y-8 grid-cols-2">
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
				<article className="py-7 px-5 sm:py-8 sm:px-6 lg:py-10 lg:px-8 m-6 sm:m-8 lg:m-10 border dark:border-dark-border dark:bg-dark-surface border-border rounded-2xl">
					<div className="flex justify-between">
						<h2 className="text-sm sm:text-base lg:text-lg">Employee Access</h2>
						<div className="flex gap-2 sm:gap-3 lg:gap-4">
							<button
								onClick={() => updateEnableAll("employee")}
								className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 my-auto ${
									enableAll.employee ? "bg-primary" : "bg-border"
								} rounded-xl min-h-5 w-[2.3rem] transition-colors duration-200`}
								role="switch"
								aria-checked={enableAll.employee}
							>
								<div
									className="flex my-auto w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-white rounded-full min-h-4 transition-transform duration-200"
									style={{
										transform: enableAll.employee
											? "translateX(100%)"
											: "translateX(0)",
									}}
								/>
							</button>
							<p className="text-sm sm:text-base lg:text-lg">Enable all</p>
						</div>
					</div>

					<div className="grid gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:gap-x-6 lg:gap-y-8 grid-cols-2">
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
