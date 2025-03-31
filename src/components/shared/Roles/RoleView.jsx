import React, { useState } from "react";
import { Details, ProfileAvatar, AddPerson } from "@global/Icons";
import Button from "@components/ui/Button";
import Tooltip from "@components/ui/Tooltip";
import PosCard from "./PosCard";
import AllRoles from "./AllRoles";
import RolePermissions from "./Role-Permissions";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../../store/useModal";
const category = [
	{ id: "all", name: "All roles" },
	{ id: "permission", name: "Permission" },
];

const RoleView = () => {
	const [active, setActive] = useState("all");
	const [hover, setHover] = useState(false);
	const { updateModal, modal } = useModal();

	console.log(modal);

	const navigate = useNavigate();

	const renderCurrentPage = () => {
		switch (active) {
			case "all":
				return <AllRoles />;
			case "permission":
				return <RolePermissions />;
			default:
				return <PosCard />;
		}
	};

	const createRole = () => {
		navigate("create-role");
	};

	return (
		<section className="p-4 md:p-6">
			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<h2 className="font-bold font-[Space]  text-[1.5rem] leading-6 ">
						Roles
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
						123
					</Button>
				</div>
				<div className="flex gap-4">
					<Button
						onClick={() =>
							updateModal({ modalState: "open", modalType: "assign-new-role" })
						}
						variant="ghost"
						size="md"
						className=" text-dark "
					>
						<ProfileAvatar className="text-gray-500" />
						<p>Assign</p>
					</Button>
					<Button onClick={createRole} variant="secondary" size="md">
						<AddPerson className="text-white" />
						<p>New Role</p>
					</Button>
				</div>
			</div>
			<ul className="border-b   flex  border-border mt-4">
				{category.map((item) => (
					<li
						key={item.id}
						onClick={() => setActive(item.id)}
						className={`flex ${
							active === item.id
								? "text-primary  border-b-2 border-primary"
								: "text-subText"
						} items-center justify-between px-3 transition-all duration-200 cursor-pointer text-sm  py-2`}
					>
						<p>{item.name}</p>
					</li>
				))}
			</ul>
			<div className="">{renderCurrentPage()}</div>
		</section>
	);
};

export default RoleView;
