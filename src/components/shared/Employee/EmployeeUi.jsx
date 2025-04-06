import {
	Details,
	Download,
	Avatar,
	Search,
	Filter,
	MoreLike,
	Edit,
	ViewProfile,
	NoData,
	AddToTeam,
	EditUser,
	Assign,
} from "@global/Icons";
import Button from "@components/ui/Button";
import { useState } from "react";
import Input from "@components/ui/Input";
// import { useQuery } from "@tanstack/react-query";
import Table from "@components/ui/Table";
import Tooltip from "@components/ui/Tooltip";
import { useModal } from "@store/useModal";
import { useNavigate } from "react-router-dom";
// import { getEmployees } from "@api/employees";
import { useEmployee } from "@hooks/useEmployee";
import { getUserShortName } from "@hooks/usePassType";
import { useAssignEmployee } from "@store/useUserDetails";
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
		render: (item) => {
			return (
				<div className="flex items-center gap-2">
					{item.image ? (
						<img
							className="size-8 rounded-full object-cover"
							src={item?.image}
							alt={item?.user?.first_name}
						/>
					) : (
						<div className="flex items-center justify-center rounded-full bg-primary/50 dark:bg-primary/50 p-2  text-gray-600 dark:text-gray-300 font-medium ">
							{getUserShortName(
								`${item?.user?.first_name}  ${item?.user?.last_name}`
							)}
						</div>
					)}
					<div className="">
						<p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
							{item?.user?.first_name + " " + item?.user?.last_name}
						</p>
						<p className="text-xs text-subText ">{item?.email}</p>
					</div>
				</div>
			);
		},
		titleField: "name",
		subtitleField: "email",
	},
	{
		field: "id",
		title: "Employee ID",
	},
	{
		field: `role`,
		title: `Role`,
		render: (item) => {
			console.log("Role :", item);
			if (item?.role === null) {
				return null;
			}
			return (
				<div>
					<p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
						{item?.role?.title || "Software Engineer"}
					</p>
					<p className="text-[.8rem] text-subText">
						{item?.role?.employment_type || "Full Time"}
					</p>
				</div>
			);
		},
	},
	{
		field: "employment_status",
		title: "Status",
		type: "status",
	},
	{
		field: "team",
		title: "Team",
		type: "tags",
	},
];

const EmployeeUi = () => {
	const [active, setActive] = useState("employee");
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [hover, setHover] = useState(false);
	const updateModal = useModal((state) => state?.updateModal);
	const setUser = useAssignEmployee((state) => state?.setUser);
	const navigate = useNavigate();

	const { employees, isLoading } = useEmployee(debouncedSearch);

	const handleSearch = (e) => {
		setSearch(e.target.value);

		const timeoutId = setTimeout(() => {
			setDebouncedSearch(e.target.value);
		}, 300);

		return () => clearTimeout(timeoutId);
	};

	const filteredEmployees = (employees || [])?.filter((employee) => {
		if (active === "teams") {
			return employee?.teams?.length > 0;
		}
		if (active === "role") {
			return employee?.role?.length !== 0;
		}
		return true;
	});

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

	return (
		<main className="p-6">
			<div className="flex flex-col gap-6 sm:flex-row justify-between">
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
								: "text-text dark:text-gray-500"
						} cursor-pointer  font-medium text-[.9rem] tracking-wider `}
						key={item?.id}
					>
						{item?.value}
					</li>
				))}
			</ul>
			<div className="py-1 px-4 mt-4 rounded-[7px] bg-white dark:bg-dark-surface  flex flex-col sm:flex-row justify-between gap-4 mb-4 border border-border mb-4 dark:border-dark-border">
				<Input
					value={search}
					onChange={handleSearch}
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
					<Button
						className="bg-[#EFEFEF] dark:bg-dark-surface "
						size="sm"
						variant="ghost"
					>
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
					data={employees && filteredEmployees}
					actions={actions}
					loading={isLoading}
					onRowClick={(employee) => console.log("Row clicked:", employee)}
				/>
				{filteredEmployees?.length === 0 && (
					<div className="flex mt-12 pb-8 col-span-2 mx-auto flex-col items-center w-full justify-center h-full">
						<NoData className=" w-60 mx-auto h-fit text-gray-400 dark:text-gray-600" />
						<p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
							No employees found
						</p>
					</div>
				)}
			</div>
		</main>
	);
};

export default EmployeeUi;
