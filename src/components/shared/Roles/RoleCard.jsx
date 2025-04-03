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
		<article className="flex mt-12 flex-col px-8 pt-8 rounded-xl border border-solid gap-4 border-border dark:border-dark-border  max-md:px-5">
			<header className="flex mb-8 items-start w-full max-md:max-w-full">
				<div className="flex flex-wrap justify-between flex-auto items-center mr-0 max-md:max-w-full">
					<div className="self-stretch my-auto min-w-60">
						<h1 className="text-lg font-semibold text-blue-950 dark:text-dark-text">
							Basic Details
						</h1>
						<p className="mt-3 text-sm leading-none text-gray-500 dark:text-dark-subText">
							Add basic information about this role you're creating
						</p>
					</div>

					<Button
						asChild={true}
						className="px-4 py-3 text-sm leading-none bg-white dark:bg-dark-surface border border-solid border-[#E6E7EC] dark:border-dark-border rounded-[29px] text-blue-950 dark:text-dark-text"
					>
						<div className="">
							<Avatar />
							Reporting manager
							<Details className="dark:text-dark-subText" />
						</div>
					</Button>
				</div>
			</header>
			<div className="flex items-start ">
				<BasicDetailsSection />
				<div className="relative ">
					<Tooltip className="whitespace-normal items-center text-xs space-x-2 px-2 flex gap-2 rounded-md w-[200px] dark:bg-dark-surface dark:text-dark-text">
						<Details className="h-6 w-6 dark:text-dark-subText" />
						This determines the type of permissions you can set
						<Close className="h-6 w-6 dark:text-dark-subText" />
					</Tooltip>
				</div>
			</div>
			<div className="flex mt-8 items-start ">
				<TeamSection />
				<div className="relative ">
					<Tooltip className="whitespace-normal items-center text-xs space-x-2 px-2 flex gap-2 rounded-md w-[200px] dark:bg-dark-surface dark:text-dark-text">
						<Details className="h-6 w-6 dark:text-dark-subText" />
						This determines the type of permissions you can set
						<Close className="h-6 w-6 dark:text-dark-subText" />
					</Tooltip>
				</div>
			</div>
		</article>
	);
};

export default RoleCard;
