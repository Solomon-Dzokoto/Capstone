import {
	Details,
	Download,
	Avatar,
	Search,
	Filter,
	MoreLike,
	Edit,
	ViewProfile,
	AddToTeam,
	EditUser,
	Assign,
} from "@global/Icons";
import Button from "@components/ui/Button";
import { useState } from "react";
import Input from "@components/ui/Input";
import { employees } from "@data/list";
import Table from "@components/ui/Table";
import Tooltip from "@components/ui/Tooltip";
import { useModal } from "../../../store/useModal";
import { useUserDetail } from "../../../store/useUserDetails";
import { useNavigate } from "react-router-dom";

const data = [
	{ id: "employee", value: "All Employees" },
	{ id: "teams", value: "Teams" },
	{ id: "role", value: "Roles" },
];

const columns = [
	{
		field: "name",
		title: "Name",
		type: "image",
		titleField: "name",
		subtitleField: "email",
		sortable: true,
	},
	{
		field: "employeeId",
		title: "Employee ID",
		sortable: true,
	},
	{
		field: "role",
		title: "Role",
		render: (item) => (
			<div>
				<p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
					{item.role}
				</p>
				<p className="text-[.8rem] text-subText">{item.workType}</p>
			</div>
		),
		sortable: true,
	},
	{
		field: "status",
		title: "Status",
		type: "status",
	},
	{
		field: "teams",
		title: "Team",
		type: "tags",
	},
];

const EmployeeUi = () => {
	const [active, setActive] = useState("employee");
	const [search, setSearch] = useState("");
	const [hover, setHover] = useState(false);
	const updateModal = useModal((state) => state?.updateModal);
	const setUser = useUserDetail((state) => state?.setUser);
	const navigate = useNavigate();

	const actions = [
		{
			id: 1,
			name: "View Profile",
			icon: ViewProfile,
			onClick: (employee) => {
				console.log("View Profile Clicked", employee);
				const path = window.location.pathname;
				navigate(`${path}/${employee.id}`);
			},
		},
		{
			id: 2,
			name: "Add to Team",
			icon: AddToTeam,
			onClick: (employee) => console.log("Team Clicked", employee),
		},
		{
			id: 3,
			name: "Edit employee",
			icon: EditUser,
			onClick: (employee) => console.log("Edit Clicked", employee),
		},
		{
			id: 4,
			name: "Assign a role",
			icon: Assign,
			onClick: (employee) => {
				console.log("Assign Clicked", employee);
				setUser(employee);
				updateModal({ modalState: "open", modalType: "assign-role" });
			},
		},
	];

	const filteredEmployees = employees.filter((employee) => {
		if (search) {
			return (
				employee?.name.toLowerCase().includes(search.toLowerCase()) ||
				employee?.employeeId.toLowerCase().includes(search.toLowerCase()) ||
				employee?.role.toLowerCase().includes(search.toLowerCase()) ||
				employee?.email.toLowerCase().includes(search.toLowerCase())
			);
		}
		if (active === "teams") {
			return employee?.teams?.length > 0;
		}
		if (active === "role") {
			return employee?.role?.trim() !== "";
		}
		return employee;
	});

	return (
		<main className="p-6">
			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<h2 className="font-bold font-[Space]  text-[1.5rem] leading-6 ">
						Employees
					</h2>
					<span
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						className="relative"
					>
						<Details />
						{hover && (
							<Tooltip>
								<p>Manage employees activities or permission</p>
							</Tooltip>
						)}
					</span>

					<Button
						variant="design"
						className="text-[.7rem]  bg-border "
						size="sm"
					>
						100
					</Button>
				</div>
				<div className="flex gap-4">
					<Button variant="ghost" size="md">
						<Download />
						<p>Export</p>
					</Button>
					<Button variant="secondary" size="md">
						<Avatar />
						<p>New Employee</p>
					</Button>
				</div>
			</div>
			<ul className="border-b mt-4 flex gap-4 border-b-border">
				{data.map((item) => (
					<li
						onClick={() => setActive(item.id)}
						className={` ${
							item.id === active
								? "border-b-2 px-1 pb-4 text-primary border-b-primary"
								: "text-text"
						} cursor-pointer  font-medium text-[.9rem] tracking-wider `}
						key={item?.id}
					>
						{item?.value}
					</li>
				))}
			</ul>
			<div className="py-1 px-4 mt-2 rounded-[7px] flex justify-between border border-border">
				<Input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-[20rem] placeholder:text-[#333333] text-[#333333] "
					placeholder="Search Employee by name,role, ID or any related keywords"
				>
					<Search />
				</Input>
				<div className="flex items-center gap-2">
					<Button className="mr-2" variant="ghost">
						<Filter />
						<p>Filter</p>
					</Button>
					<Button className="bg-[#EFEFEF] " size="sm" variant="ghost">
						<Edit />
					</Button>
					<Button size="sm" className="py-2" variant="ghost">
						<MoreLike />
					</Button>
				</div>
			</div>
			<div className="flex-1 min-h-0">
				<Table
					columns={columns}
					data={filteredEmployees}
					actions={actions}
					onRowClick={(employee) => console.log("Row clicked:", employee)}
				/>
			</div>
		</main>
	);
};

export default EmployeeUi;
