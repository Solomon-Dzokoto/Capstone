import {
  Home,
  Briefcase,
  ChartPie,
  Receipt,
  Settings,
  User,
} from "@/global/Icons";
import { useState } from "react";
import { ArrowDown } from "../../global/Icons";

const lists = [
  { id: 1, value: "Dashboard", icon: Home },
  { id: 2, value: "Roles", icon: Briefcase },
  { id: 3, value: "Employees", icon: User, subIcon: ArrowDown },
  { id: 4, value: "Payroll", icon: Receipt },
  { id: 5, value: "Report", icon: ChartPie },
  { id: 6, value: "Settings", icon: Settings },
];

const Sidebar = () => {
  const [active, setActive] = useState(1);
  return (
    <aside className="w-[14.5rem] block p-6 border-r min-h-dvh border-border">
      <img
        className="w-auto min-w-[11.5rem] mb-8"
        src="/assets/Logo (1).png"
        alt="Logo"
      />
      <ul className="space-y-3">
        {lists.map((list) => (
          <li
            onClick={() => setActive(list.id)}
            key={list.id}
            className={` ${
              active === list.id ? "bg-primary text-white" : "bg-white"
            } flex py-2 px-4 rounded-[2rem] cursor-pointer items-center gap-3 text-text`}
          >
            <list.icon color={active === list.id ? "white" : "#091E42"} />
            <p className="flex-1">{list.value}</p>
            {list.subIcon && (
              <list.subIcon color={active === list.id ? "white" : "#091E42"} />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
