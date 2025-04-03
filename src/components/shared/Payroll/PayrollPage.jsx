import React, { useState } from "react";
import { Details, Download, Avatar, Search, Filter } from "@/global/Icons";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Table from "@components/ui/Table";
import Tooltip from "@components/ui/Tooltip";
import { payrollData } from "@/data/payrollData";
import { useNavigate } from "react-router-dom";

const columns = [
	{
		field: "name",
		title: "Employee Name",
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
		field: "salary",
		title: "Base Salary",
		render: (item) => (
			<div>
				<p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
					${item.salary?.toLocaleString() || "0"}/year
				</p>
			</div>
		),
	},
	{
		field: "status",
		title: "Payment Status",
		type: "status",
	},
	{
		field: "lastPaid",
		title: "Last Payment",
		render: (item) => (
			<div>
				<p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
					{item.lastPaid || "Not available"}
				</p>
			</div>
		),
	},
];

const payrollCategories = [
	{ id: "all", value: "All Payrolls" },
	{ id: "pending", value: "Pending" },
	{ id: "processed", value: "Processed" },
];

const PayrollPage = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState("all");
	const [hover, setHover] = useState(false);
	const [search, setSearch] = useState("");

	const filteredData = payrollData.filter((employee) => {
		if (active === "pending") {
			return employee.status.toLowerCase() === "pending";
		}
		if (active === "processed") {
			return employee.status.toLowerCase() === "active";
		}
		if (search) {
			return (
				employee.name.toLowerCase().includes(search.toLowerCase()) ||
				employee.employeeId.toLowerCase().includes(search.toLowerCase()) ||
				employee.email.toLowerCase().includes(search.toLowerCase())
			);
		}
		return true;
	});

	return (
		<main className="p-4 md:p-6">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div className="flex items-center gap-2">
					<h2 className="font-bold font-[Space] text-xl md:text-[1.5rem] leading-6">
						Payroll Management
					</h2>
					<span
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						className="relative cursor-help"
					>
						<Details />
						{hover && (
							<Tooltip>
								<p>Manage employee payroll and payment history</p>
							</Tooltip>
						)}
					</span>
				</div>
				<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
					<Button variant="ghost" size="md" className="w-full sm:w-auto">
						<Download />
						<p>Export</p>
					</Button>
					<Button variant="secondary" size="md" className="w-full sm:w-auto">
						<Avatar />
						<p>Process Payroll</p>
					</Button>
				</div>
			</div>

			<div className="mt-6 overflow-x-auto">
				<ul className="flex gap-4 border-b border-border min-w-max">
					{payrollCategories.map((item) => (
						<li
							key={item.id}
							onClick={() => setActive(item.id)}
							className={`${
								item.id === active
									? "border-b-2 px-1 pb-4 text-primary border-b-primary"
									: "text-text dark:text-gray-500"
							} cursor-pointer  font-medium text-[.9rem] tracking-wider whitespace-nowrap`}
						>
							{item.value}
						</li>
					))}
				</ul>
			</div>

			<div className="py-1 px-4 mt-4 rounded-[7px] bg-white dark:bg-dark-surface  flex flex-col sm:flex-row justify-between gap-4 border border-border">
				<Input
					className="w-full sm:w-[20rem]  placeholder:text-[#333333] text-[#333333]"
					placeholder="Search payroll by employee name, ID or any related keywords"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				>
					<Search />
				</Input>
				<div className="flex items-center">
					<Button className="w-full sm:w-auto" variant="ghost">
						<Filter />
						<p>Filter</p>
					</Button>
				</div>
			</div>

			<div className="flex-1 min-h-0 mt-4 overflow-hidden">
				<div className="overflow-x-auto">
					<Table
						columns={columns}
						data={filteredData}
						actions={[
							{
								id: 1,
								name: "View Details",
								onClick: (employee) => navigate(`${employee.id}`),
							},
							{
								id: 2,
								name: "Process Payment",
								onClick: (employee) => navigate(`${employee.id}/process`),
							},
						]}
						onRowClick={(payroll) => navigate(`${payroll.id}`)}
					/>
				</div>
			</div>
		</main>
	);
};

export default PayrollPage;
