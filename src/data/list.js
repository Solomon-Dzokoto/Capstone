import {
  Home,
  Briefcase,
  ChartPie,
  Receipt,
  Settings,
  User,
  ArrowDown
} from "@/global/Icons";

export const lists = [
  { id: "dashboard", value: "Dashboard", icon: Home },
  { id: "roles", value: "Roles", icon: Briefcase },
  { id: "employees", value: "Employees", icon: User, subIcon: ArrowDown },
  { id: "payroll", value: "Payroll", icon: Receipt },
  { id: "report", value: "Report", icon: ChartPie },
  { id: "setting", value: "Settings", icon: Settings },
];

export const employeeRender = [
  { id: "all", value: "All Employee" },
  { id: "recent", value: "Recent Hires" },
];