import {
  Home,
  Briefcase,
  ChartPie,
  Receipt,
  Settings,
  User,
  ArrowDown
} from "@/global/Icons";

export const sidebarLists = [
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


export const employees = [
  {
    id: 1,
    name: "Tanner Finsha",
    email: "Tannerfisher@gmail.com",
    employeeId: "#23454GH6J7YT6",
    role: "Product Designer",
    status: "Active",
    workType: "Full time",
    teams: ["Marketing", "Design", "+1"],
  },
  {
    id: 2,
    name: "Emeto Winner",
    email: "Emetowinner@gmail.com",
    employeeId: "#23454GH6J7YT6",
    role: "Product Designer",
    status: "Active",
    workType: "Contract",
    teams: ["Product", "Design", "+1"],
  },
  {
    id: 3,
    name: "Tassy Omah",
    email: "Tassyomah@gmail.com",
    employeeId: "#23454GH6J7YT6",
    role: "Product Designer",
    status: "Inactive",
    workType: "Associate",
    teams: ["Product"],
  },
  {
    id: 4,
    name: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    employeeId: "#23454GH6J7YT6",
    role: "Product Designer",
    status: "Inactive",
    workType: "Full time",
    teams: ["Engineering", "Design"],
  },
  {
    id: 5,
    name: "Emeto Winner",
    email: "Emetowinner@gmail.com",
    employeeId: "#23454GH6J7YT6",
    role: "Frontend Engineer",
    status: "Inactive",
    workType: "Part time",
    teams: ["Product", "Design", "+3"],
  },
  {
    id: 6,
    name: "Tassy Omah",
    email: "Tassyomah@gmail.com",
    employeeId: "#23454GH6J7YT6",
    role: "Backend Engineer",
    status: "Active",
    workType: "Part time",
    teams: ["Engineering", "Design"],
  },
  {
    id: 7,
    name: "James Muriel",
    email: "JamesMuriel@Aerten.finance",
    employeeId: "#23454GH6J7YT6",
    role: "Backend Engineer",
    status: "Active",
    workType: "Part time",
    teams: ["Product", "Design", "+6"],
  },
  {
    id: 8,
    name: "Emeto Winner",
    email: "Emetowinner@gmail.com",
    employeeId: "#23454GH6J7YT6",
    role: "Sales Specialist",
    status: "Inactive",
    workType: "Part time",
    teams: ["Product", "Design", "+4"],
  },
];


