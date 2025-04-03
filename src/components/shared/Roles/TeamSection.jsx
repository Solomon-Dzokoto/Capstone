"use client";
import React, { useState } from "react";
import Badge from "./Badge";
import { Details, Search } from "../../../global/Icons";
import Input from "../../ui/Input";

const TeamSection = () => {
	const [isTyping, setIsTyping] = useState(false);

	const teamMembers = [
		{
			id: 1,
			name: "Jennifer Lopez",
			image: "",
		},
		{
			id: 2,
			name: "Tassy Omah",
			image: "",
		},
		{
			id: 3,
			name: "Jane Mena",
			image: "",
		},
		{
			id: 4,
			name: "Emeto Winnder",
			image: "",
		},
		{
			id: 5,
			name: "Kate Magnamay",
			image: "",
		},
	];

	const onChange = (e) => {
		if (e.target) {
			setIsTyping(true);
		}
	};
	return (
		<section className="flex flex-col px-8 pt-8 pb-4 w-auto min-w-[700px] bg-white dark:bg-dark-surface text-dark dark:text-light rounded-xl border border-solid border-[#C2C7D0] dark:border-dark-border max-md:px-5 max-md:mt-10 max-md:max-w-full">
			<header className="flex flex-wrap gap-5 justify-between w-full text-base font-medium leading-none text-blue-950 dark:text-dark-text max-md:max-w-full">
				<h3 className="gap-2 self-stretch">Add Teams</h3>
				<Details className="dark:text-dark-subText" />
			</header>
			<div className="flex flex-col justify-center items-start px-4 py-2.5 mt-4 w-full text-sm tracking-normal leading-loose text-gray-400 dark:text-dark-subText bg-white dark:bg-dark-surface rounded border border-solid opacity-80 border-[#E6E7EC] dark:border-dark-border max-md:pr-5 max-md:max-w-full">
				<div className="flex gap-1.5 justify-center items-center">
					<Search className="dark:text-dark-subText" />
					{!isTyping && (
						<label className="self-stretch my-auto">
							Search existing teams and press{" "}
							<span className="font-medium text-[#676E7E] dark:text-dark-text">
								Enter
							</span>{" "}
							to add them
						</label>
					)}
					<Input
						onChange={onChange}
						className="dark:bg-dark-surface dark:text-dark-text dark:border-dark-border"
					/>
				</div>
			</div>
			<div className="flex flex-wrap gap-2 mt-4">
				{teamMembers.map((member) => (
					<Badge key={member.id} name={member.name} image={member.image} />
				))}
			</div>
		</section>
	);
};

export default TeamSection;
