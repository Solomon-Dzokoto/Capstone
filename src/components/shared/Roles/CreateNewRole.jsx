import React, { useState } from "react";
import RoleCard from "./RoleCard";
import { ArrowLeft, Mark } from "../../../global/Icons";
import { useNavigate } from "react-router-dom";
import RolePage from "./RolePage";
import SetPermissions from "./SetPermissions";

const progress = [
	{ id: 1, stage: "Basic Info" },
	{ id: 2, stage: "Set Permission" },
	{ id: 3, stage: "Review Details" },
];

const CreateNewRole = () => {
	const [current, setCurrent] = useState(1);

	const navigate = useNavigate();
	const moveToNextPage = () => {
		setCurrent((prev) =>
			prev <= progress.length - 1 ? prev + 1 : progress.length
		);
		return;
	};
	const moveToPrevPage = () => {
		setCurrent((prev) => (prev > 1 ? prev - 1 : 1));
		return null;
	};

	const renderSection = () => {
		switch (current) {
			case 1:
				return <RoleCard />;
			case 2:
				return <SetPermissions />;
			case 3:
				return <RolePage />;
			default:
				return null;
		}
	};
	return (
		<section className="flex flex-col p-3 sm:p-6">
			<button
				onClick={() => navigate(-1)}
				className="flex gap-1 sm:gap-2 dark:text-gray-300 items-center self-start text-sm sm:text-base tracking-tight leading-none whitespace-nowrap text-slate-500"
			>
				<ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
				<span className=" my-auto">Roles</span>
			</button>
			<div className="flex flex-wrap gap-3 sm:gap-5 justify-between mt-4 sm:mt-6 w-full">
				<div className="flex flex-col justify-center w-full sm:w-auto">
					<h1 className="text-xl sm:text-2xl font-semibold leading-none text-gray-900">
						Create New Role
					</h1>
					<nav className="flex flex-wrap gap-4 sm:gap-10 items-start self-start mt-4 sm:mt-7">
						{progress.map((item) => (
							<div
								key={item.id}
								className={`flex items-center space-x-2 ${
									current === item.id ? "text-primary" : "text-gray-500"
								}`}
							>
								<span
									className={`${
										current === item.id ? "bg-primary" : "bg-white"
									} p-1 px-2 text-[10px] sm:text-xs flex items-center w-fit text-gray-400 border border-border rounded-full`}
								>
									{current === item.id ? (
										<Mark className="text-white" />
									) : (
										`${item.id}`
									)}
								</span>
								<span
									className={`text-sm sm:text-base ${
										current === item.id ? "text-primary" : "text-gray-500"
									}`}
								>
									{item.stage}
								</span>
							</div>
						))}
					</nav>
				</div>
				<div className="flex gap-2 items-start self-end mt-4 sm:mt-9 text-xs sm:text-sm leading-none whitespace-nowrap w-full sm:w-auto justify-end">
					<button
						onClick={moveToPrevPage}
						className="gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-md border border-solid border-[color:var(--Gray-100,#E6E7EC)] min-h-[2.5rem] sm:min-h-11 text-blue-950 w-[80px] sm:w-[92px]"
					>
						{current > 1 ? "Previous" : "Cancel"}
					</button>
					<button
						onClick={moveToNextPage}
						className="gap-2 px-3 sm:px-4 py-2 sm:py-3 text-white bg-primary rounded-lg min-h-[2.5rem] sm:min-h-11"
					>
						{current === progress.length ? "Save" : "Continue"}
					</button>
				</div>
			</div>
			<section className="mt-4 sm:mt-6">{renderSection()}</section>
		</section>
	);
};

export default CreateNewRole;
