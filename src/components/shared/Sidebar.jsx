import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Avatar,
	Dashboard,
	Employee,
	RoleIcon,
	Payroll,
	Report,
	Setting,
	Menu,
} from "@global/Icons";

const navigation = [
	{ name: "Dashboard", to: "/", Icon: Dashboard },
	{ name: "Employee", to: "/employees", Icon: Employee },
	{ name: "Roles", to: "/roles", Icon: RoleIcon },
	{ name: "Payroll", to: "/payroll", Icon: Payroll },
	{ name: "Report", to: "/report", Icon: Report },
	{ name: "Settings", to: "/setting", Icon: Setting },
];

const Sidebar = ({ isOpen, onToggle }) => {
	const { pathname } = useLocation();

	return (
		<aside
			className={`fixed md:relative h-screen bg-white border-r border-border transition-all duration-300 z-50 ${
				isOpen ? "w-60" : "w-0 md:w-20"
			}`}
		>
			<div className="flex items-center justify-between p-4">
				<div
					className={`flex items-center gap-2 ${
						!isOpen && "md:justify-center"
					}`}
				>
					<img
						src="/assets/Logo (1).png"
						alt="logo"
						className="w-8 h-8 object-contain"
					/>
					<h1
						className={`text-lg font-bold transition-opacity duration-200 ${
							!isOpen ? "opacity-0 hidden md:hidden" : "opacity-100"
						}`}
					>
						Afrima
					</h1>
				</div>
				<button
					onClick={onToggle}
					className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
				>
					<Menu className="w-6 h-6" />
				</button>
			</div>
			<nav className="mt-8">
				<ul className="space-y-2 px-3">
					{navigation.map(({ name, to }) => (
						<li key={name}>
							<Link
								to={to}
								className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
									pathname === to
										? "bg-primary/10 text-primary"
										: "text-subText hover:bg-gray-50"
								}`}
							>
								<Icon
									className={`w-5 h-5 ${pathname === to ? "text-primary" : ""}`}
								/>
								<span
									className={`transition-opacity duration-200 ${
										!isOpen ? "opacity-0 hidden md:hidden" : "opacity-100"
									}`}
								>
									{name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
