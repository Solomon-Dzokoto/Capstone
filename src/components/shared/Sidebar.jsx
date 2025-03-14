import { lists, employeeRender } from "../../data/list";
import { useList } from "../../store/useListStore";
const Sidebar = () => {
  const { active, setActive, employeeList, setEmployeeList, hide, setHide } =
    useList();

  const showEmployeeDropdown = (e) => {
    e.stopPropagation();
    setHide(!hide);
  };
  return (
    <aside className="w-[14.5rem] block p-6 border-r min-h-dvh border-border">
      <img
        className="w-auto min-w-[11.5rem] mb-8"
        src="/assets/Logo (1).png"
        alt="Logo"
      />
      <ul className="space-y-3">
        {lists.map((list) => (
          <li onClick={() => setActive(list.id)} key={list.id}>
            <div
              className={` ${
                active === list.id ? "bg-primary text-white" : "bg-white"
              } flex py-2 px-4 rounded-[2rem] cursor-pointer items-center gap-3 text-text`}
            >
              <list.icon color={active === list.id ? "white" : "#091E42"} />
              <p className="flex-1">{list.value}</p>
              {list.subIcon && (
                <button
                  onClick={(e) => showEmployeeDropdown(e)}
                  disabled={!(active === "employees")}
                  className=" hover:bg-secondary pointer-events-auto p-1 rounded-full hover:bg-opacity-55"
                >
                  <list.subIcon
                    className={
                      hide
                        ? "transition-rotate duration-200 "
                        : "transition-rotate -rotate-90 duration-200"
                    }
                    color={active === list.id ? "white" : "#091E42"}
                  />
                </button>
              )}
            </div>
            {hide ? (
              <div className="">
                {active === "employees" && list.value === "Employees" && (
                  <ul className="space-y-2 relative mt-3 left-8">
                    {employeeRender.map((employee) => (
                      <li
                        onClick={() => setEmployeeList(employee.id)}
                        className={`${
                          employee.id === employeeList
                            ? "text-primary"
                            : "text-subText"
                        } flex gap-2 items-center text-[.75rem] `}
                      >
                        <input
                          type="radio"
                          name="employee"
                          className="appearance-none "
                          value={employee.value}
                        />
                        <div
                          className={`${
                            employee.id === employeeList
                              ? "bg-primary"
                              : "bg-subText"
                          } size-2 rounded-full`}
                        />
                        <label className="">{employee.value}</label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
