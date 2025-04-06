import { useState } from "react";
import { Details } from "@global/Icons";
import Tooltip from "@components/ui/Tooltip";
import ToggleSwitch from "@components/ui/ToggleSwitch";
import useToggle from "@store/useToggle";

const perm = [
  { id: "teams", name: "For all Teams" },
  { id: "roles", name: "For all Roles" },
  { id: "employees", name: "For all Employees" },
  { id: "admins", name: "For all Admins" },
  { id: "custom", name: "Custom" },
];
const RolePermissions = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState("employees");
  const toggle = useToggle((state) => state.toggle);
  const toggles = useToggle((state) => state.toggles);
  const updateEnableAll = useToggle((state) => state.updateEnableAll);
  const enableAll = useToggle((state) => state.enableAll);

  return (
    <section className="p-2 sm:p-4">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-3 py-2 sm:py-4 items-center">
          <h2 className="font-bold text-subText dark:text-slate-400 inline-block font-[Space] text-[1.2rem] sm:text-[1.5rem] leading-6">
            Owner (Admin)
          </h2>
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative"
          >
            <Details className="text-subText inline-block" />
            {hover && (
              <Tooltip className="w-[15rem] whitespace-normal">
                <p>
                  Every member gets basic permissions and functionality by
                  default. You can customize settings for all members and teams
                  or make local adjustments for individual user profiles
                </p>
              </Tooltip>
            )}
          </span>
        </div>
        <p className="text-subText text-sm sm:text-base">
          Owners have view and edit access to user mgt by default which cannot
          be changed
        </p>
      </div>
      <hr className="text-subText my-4 dark:text-dark-border sm:my-6" />
      <div className="border dark:border-dark-border dark:bg-dark-hover border-border rounded-2xl">
        <h2 className="text-base sm:text-lg p-3 sm:p-4 dark:text-gray-200 font-semibold text-text">
          Set permissions
        </h2>
        <p className="text-xs sm:text-sm p-3 sm:p-4 text-subText">
          Modify access and permission for team and individuals
        </p>
        <hr className="text-subText my-4 sm:my-6" />
        <ul className="border-b p-2 sm:p-4 flex flex-wrap border-border mt-2 sm:mt-4">
          {perm.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex ${
                active === item.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-subText"
              } items-center justify-between px-2 sm:px-3 transition-all duration-200 cursor-pointer text-xs sm:text-sm py-2`}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        <article className="py-4 sm:py-7 dark:border-dark-border dark:bg-dark-surface px-3 sm:px-5 m-3 sm:m-6 border border-border rounded-2xl">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="text-sm sm:text-base">Manager Access</h2>
            <div className="flex gap-2">
              <button
                onClick={() => updateEnableAll("manager")}
                className={`inline-flex overflow-hidden flex-shrink-0 items-center p-0.5 my-auto ${
                  enableAll.manager ? "bg-primary" : "bg-border"
                } rounded-xl min-h-5 w-[2.3rem] transition-colors duration-200`}
                role="switch"
                aria-checked={enableAll.manager}
              >
                <div
                  className="flex my-auto w-4 h-4 bg-white rounded-full min-h-4 transition-transform duration-200"
                  style={{
                    transform: enableAll.manager
                      ? "translateX(100%)"
                      : "translateX(0)",
                  }}
                />
              </button>
              <p className="text-sm sm:text-base">Enable all</p>
            </div>
          </div>

          <div className="grid gap-x-2 gap-y-4 grid-cols-1 md:grid-cols-2 mt-4">
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
        <article className="py-4 sm:py-7 dark:border-dark-border dark:bg-dark-surface  px-3 sm:px-5 m-3 sm:m-6 border border-border rounded-2xl">
          <div className="flex flex-wrap justify-between gap-4">
            <h2 className="text-sm sm:text-base">Employee Access</h2>
            <div className="flex gap-2">
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
              <p className="text-sm sm:text-base">Enable all</p>
            </div>
          </div>

          <div className="grid gap-x-2  gap-y-4 grid-cols-1 md:grid-cols-2 mt-4">
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

export default RolePermissions;
