import React from "react";
import { Close } from "@global/Icons";

import { sidebarLists, employeeRender } from "@data/list";
import { useList } from "@store/useListStore";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onToggle }) => {
	const { active, setActive, employeeList, setEmployeeList, hide, setHide } =
		useList();
	const navigate = useNavigate();

	const handleItemClick = (id, e) => {
		if (!e.target.closest("button")) {
			const element = sidebarLists.find((list) => list.id === id);
			if (element.path) {
				setActive(id);
				navigate(element?.path);
			}
		}
	};

	const showEmployeeDropdown = (e) => {
		e.stopPropagation();
		setHide();
	};

	return (
		<aside
			className={`fixed md:relative md:p-6 h-screen bg-white border-r border-border transition-all duration-300 z-30 md:z-0 ${
				isOpen ? "w-[15.5rem]" : "w-0 md:w-20"
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
					<Close className="w-6 h-6" />
				</button>
			</div>
			<ul className="space-y-3">
				{sidebarLists.map((list) => (
					<li onClick={(e) => handleItemClick(list.id, e)} key={list.id}>
						<div
							className={` ${
								active === list.id ? "bg-primary text-white" : "bg-white"
							} flex py-2 px-4 ${
								!isOpen ? "px-5" : ""
							}   rounded-[2rem] cursor-pointer items-center gap-3 text-text`}
						>
							<span
								className={`${
									!isOpen ? "relative -left-2" : ""
								} flex items-center`}
							>
								<list.icon color={active === list.id ? "white" : "#091E42"} />
							</span>
							<p
								className={`transition-opacity duration-200 flex-1 ${
									!isOpen ? "opacity-0 w-0" : "opacity-100"
								}`}
							>
								{list.value}
							</p>
							{list.subIcon && (
								<button
									onClick={showEmployeeDropdown}
									disabled={!(active === "employees")}
									className={`hover:bg-secondary pointer-events-auto p-1 rounded-full hover:bg-opacity-55 ${
										!isOpen ? "hidden" : ""
									}`}
								>
									<list.subIcon
										className={
											hide
												? "transition-rotate duration-200"
												: "transition-rotate -rotate-90 duration-200"
										}
										color={active === list.id ? "white" : "#091E42"}
									/>
								</button>
							)}
						</div>
						{isOpen &&
							hide &&
							active === "employees" &&
							list.value === "Employees" && (
								<ul className="space-y-2 relative mt-3 left-8">
									{employeeRender.map((employee) => (
										<li
											onClick={() => setEmployeeList(employee.id)}
											key={employee.id}
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
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
