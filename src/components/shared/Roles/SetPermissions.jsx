import { Details } from "@global/Icons";
import Tooltip from "@components/ui/Tooltip";
import ToggleSwitch from "@components/ui/ToggleSwitch";
import useToggle from "@store/useToggle";
import image from "/assets/pp1.png";

const SetPermissions = () => {
	const { toggle, toggles, updateEnableAll, enableAll } = useToggle();

	return (
		<section className="p-4 space-y-6 mt-8">
			<div
				className="border border-border dark:bg-dark-card dark:border-dark-border overflow-hidden rounded-2xl
      "
			>
				<div className="flex p-6 border-b items-center dark:bg-dark-card dark:border-dark-border border-b-border justify-between">
					<div className="">
						<h2 className="text-lg mb-1 font-semibold">Set permissions</h2>
						<p className="text-subText ">
							Modify access and permission for team and individuals
						</p>
					</div>
					<div className="flex gap-2">
						<div className="relative">
							<img className="size-10" src={image} alt="" />
						</div>
						<div className="">
							<h4 className="text-sm">James Campion</h4>
							<p className="text-sm  text-subText ">Reporting manager</p>
						</div>
					</div>
				</div>
				<article className="py-7 px-5 m-6  border   dark:border-dark-border dark:bg-dark-surface border-border rounded-2xl ">
					<div className="flex justify-between ">
						<h2>Manager Access</h2>
						<div className=" flex gap-2">
							<button
								onClick={() => updateEnableAll("manager")}
								className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 my-auto ${
									enableAll.manager ? "bg-primary" : "bg-border"
								} rounded-xl min-h-5 w-[2.3rem] transition-colors duration-200`}
								role="switch"
								aria-checked={enableAll.manager}
							>
								<div
									className="flex my-auto w-4 dark:bg-dark-surface dark:border-dark-border h-4 bg-white rounded-full min-h-4 transition-transform duration-200"
									style={{
										transform: enableAll.manager
											? "translateX(100%)"
											: "translateX(0)",
									}}
								/>
							</button>
							<p>Enable all</p>
						</div>
					</div>

					<div className="grid gap-x-2 gap-y-4 grid-cols-2">
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
				<article className="py-7  dark:bg-dark-surface dark:border-dark-border px-5 m-6  border border-border rounded-2xl ">
					<div className="flex justify-between ">
						<h2>Employee Access</h2>
						<div className=" flex gap-2">
							<button
								onClick={() => updateEnableAll("employee")}
								className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 my-auto ${
									enableAll.employee ? "bg-primary" : "bg-border"
								} rounded-xl min-h-5 w-[2.3rem] transition-colors duration-200`}
								role="switch"
								aria-checked={enableAll.employee}
							>
								<div
									className="flex my-auto w-4 h-4 bg-white rounded-full min-h-4 transition-transform duration-200"
									style={{
										transform: enableAll.employee
											? "translateX(100%)"
											: "translateX(0)",
									}}
								/>
							</button>
							<p>Enable all</p>
						</div>
					</div>

					<div className="grid gap-x-2 gap-y-4 grid-cols-2">
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
