"use client";
import React from "react";
import BasicDetailsSection from "./BaseDetails";
import TeamSection from "./TeamSection";
import Button from "@components/ui/Button";
import { Details, Avatar } from "@global/Icons";
import Tooltip from "@components/ui/Tooltip";
import { Close } from "@global/Icons";

const RoleCard = () => {
	return (
		<article className="flex flex-col p-4 md:p-6 lg:p-8 rounded-xl border border-solid border-border dark:border-dark-border">
			<header className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-start justify-between mb-6 md:mb-8 lg:mb-10">
				<div className="w-full md:w-auto">
					<h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-950 dark:text-dark-text">
						Basic Details
					</h1>
					<p className="mt-2 text-sm md:text-base lg:text-lg text-gray-500 dark:text-dark-subText">
						Add basic information about this role you're creating
					</p>
				</div>

				<Button
					asChild={true}
					className="w-full md:w-auto px-4 py-3 text-sm md:text-base lg:text-lg bg-white dark:bg-dark-surface border border-solid border-[#E6E7EC] dark:border-dark-border rounded-full text-blue-950 dark:text-dark-text"
				>
					<div className="flex items-center justify-center md:justify-start gap-2">
						<Avatar className="w-5 h-5 md:w-6 md:h-6" />
						<span>Reporting manager</span>
						<Details className="dark:text-dark-subText w-5 h-5 md:w-6 md:h-6" />
					</div>
				</Button>
			</header>

			<div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
				<div className="relative">
					<BasicDetailsSection />
					<div className="absolute top-0 right-0 md:-right-8 lg:-right-10">
						<Tooltip className="whitespace-normal flex items-center gap-2 p-2 rounded-md w-[200px] md:w-[250px] text-sm dark:bg-dark-surface dark:text-dark-text">
							<Details className="w-5 h-5 md:w-6 md:h-6 dark:text-dark-subText" />
							<span>This determines the type of permissions you can set</span>
							<Close className="w-5 h-5 md:w-6 md:h-6 dark:text-gray-400" />
						</Tooltip>
					</div>
				</div>

				<div className="relative">
					<TeamSection />
					<div className="absolute top-0 right-0 md:-right-8 lg:-right-10">
						<Tooltip className="whitespace-normal flex items-center gap-2 p-2 rounded-md w-[200px] md:w-[250px] text-sm dark:bg-dark-surface dark:text-dark-text">
							<Details className="w-5 h-5 md:w-6 md:h-6 dark:text-dark-subText" />
							<span>Add team members who will have this role</span>
							<Close className="w-5 h-5 md:w-6 md:h-6 dark:text-gray-400" />
						</Tooltip>
					</div>
				</div>
			</div>
		</article>
	);
};

export default RoleCard;
