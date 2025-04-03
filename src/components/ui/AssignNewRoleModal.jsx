import React, { useEffect, useState } from "react";
import {
	Close,
	Details,
	MarkIcon,
	ModalIcon,
	Search,
	AddPerson,
	ProfileAvatar,
} from "../../global/Icons";
import Input from "./Input";
import Button from "./Button";
import { useModal } from "../../store/useModal";
import Badge from "./Badge";
import { employees } from "../../data/list";
import { getFirstLetters } from "../../store/useUserDetails";

const AssignNewRoleModal = () => {
	//   const name = employees.map((key) => ({ [key?.name]: false }));
	const [search, setSearch] = useState("");
	const [roles, setRoles] = useState([]);
	const [teamMembers, setTeamMembers] = useState([]);
	const [checked, setChecked] = useState({});
	console.log("Name", checked);

	const updateModal = useModal((state) => state.updateModal);

	useEffect(() => {
		const filteredRoles = employees.filter((role) =>
			role.name.toLowerCase().includes(search.toLowerCase())
		);
		setRoles(filteredRoles);
	}, [search]);

	//   useEffect(() => {
	//     const handleClickOutside = (e) => {
	//       console.log(e.target);
	//       if (divRef.current && !divRef.current.contains(e.target)) {
	//         updateModal({ modalState: "close", modalType: "assign-role" });
	//       }
	//     };
	//     document.addEventListener("mousedown", handleClickOutside);
	//     return () => document.removeEventListener("mousedown", handleClickOutside);
	//   }, [updateModal]);

	const addBadges = (name) => {
		setChecked((prev) => ({
			...prev,
			[name]: !prev[name],
		}));
		setTeamMembers((prev) => {
			if (!prev.includes(name)) {
				return [...prev, name];
			}
			return prev;
		});
		setSearch("");
	};

	const removeBadge = (name) => {
		setTeamMembers((prevRoles) => prevRoles.filter((role) => role !== name));
	};

	return (
		<div className="fixed !inset-0 grid place-content-center z-30 backdrop-blur-sm bg-black/60">
			<button
				onClick={(e) => {
					e.stopPropagation();
					updateModal({ modalState: "close", modalType: "assign-new-role" });
				}}
				className="absolute  p-2 rounded-full bg-white  z-40 top-16  right-[25%] "
			>
				<Close />
			</button>
			<div className="px-10 py-6 max-h-full overflow-y-auto rounded-2xl relative space-y-8 bg-white w-full md:w-[30rem]">
				<span className="bg-primary/20 inline-block py-3 px-3 rounded-full  ">
					<ModalIcon />
				</span>
				<div className=" relative ">
					<h2 className="text-xl mb-4 font-semibold ">Assign a role</h2>
					<p className="text-subText mb-4 items-center ">
						Select one or multiple employees to assign to this role
						<span className="text-secondary inline-block font-semibold">
							"Senior Design Lead"
						</span>
					</p>
					<div className=" relative border border-border p-2 rounded-2xl ">
						<div className="justify-between text-gray flex items-center">
							<Search className="text-gray-500" />
							<div className="text-gray-700  flex-1">
								<Input
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									className="placeholder:text-gray-500 "
									placeHolder="Search for an individual or team"
								/>
							</div>
							<Details className="text-gray-500" />
						</div>
						<div className="flex gap-1 flex-wrap">
							{teamMembers &&
								teamMembers?.map((name) => (
									<Badge
										key={name}
										name={name}
										onRemove={() => removeBadge(name)}
									/>
								))}
						</div>
					</div>
					<div className="max-h-60 overflow-y-auto border border-border rounded-xl bg-white">
						<ul className="absolute px-3 py-1 z-30 rounded-xl bg-white  border-border w-full ">
							{search.trim() !== "" &&
								roles &&
								roles.map((item) => (
									<li
										className={`p-4 gap-2 border border-border rounded-md  flex items-start justify-between text-xs text-subText cursor-pointer ${
											checked[item?.name] ? "bg-primary/30" : ""
										} hover:bg-border/50 `}
										key={item?.id}
									>
										{item.image ? (
											<img
												className="rounded-full size-6"
												src={item.image}
												alt={item?.name}
											/>
										) : (
											<span className="rounded-full size-6 text-[.6rem] flex items-center justify-center text-brown font-700 bg-[#d9e1fb]">
												{getFirstLetters(item?.name)}
											</span>
										)}
										<div className="flex-1 ">
											<p className="text-sm font-bold">{item?.name}</p>
											<span className="text-xs text-secondary ">
												{item?.role}
											</span>
										</div>
										<label className="relative flex items-center cursor-pointer">
											<input
												type="checkbox"
												className="hidden"
												checked={checked[item?.name] || false}
												onChange={() => addBadges(item?.name)}
											/>
											<div
												className={`w-4 h-4 border-2 border-secondary rounded-full flex items-center justify-center transition-all ${
													checked[item?.name]
														? "bg-secondary border-secondary"
														: "bg-transparent"
												}`}
											>
												{checked && <MarkIcon className="text-white " />}
											</div>
										</label>
									</li>
								))}
						</ul>
					</div>
					<Button className=" w-full py-2 mt-12">Assign</Button>
					<Button
						variant="ghost"
						asChild
						className="bg-white w-fit text-gray-600 rounded-[2rem] border-border border py-2 px-4 mt-4"
					>
						<span>
							<AddPerson />
							Create new role
							<Details />
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AssignNewRoleModal;
