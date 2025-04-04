import React from "react";
import { ArrowLeft } from "@global/Icons";
import Button from "@components/ui/Button";
import { EditPen } from "@global/Icons";

const teamMembersImages = [
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
];
const btnType = ["Marketing", "Product", "Engineering", "Design"];

const PosCard = () => {
	return (
		<article className="py-4 px-8 space-y-4 w-auto md:min-w-[29rem] border rounded-xl border-border dark:border-dark-border dark:bg-dark-surface h-fit min-h-[11.4rem]">
			<div className="flex justify-between items-center">
				<div className="">
					<h1 className="text-dark flex justify-between items-center dark:text-dark-text">
						Solution Sales Specialist
					</h1>
				</div>

				<div className="flex gap-2">
					<div className="flex -space-x-4">
						{teamMembersImages.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="profile"
								className="w-8 h-8 border-2 border-border dark:border-dark-border rounded-full"
							/>
						))}
						<span className="text-sm rounded-full border-2 border-white dark:border-dark-border w-8 h-8 flex bg-[#F7E8EF] dark:bg-pink-900/20 items-center justify-center text-[#6A1039] dark:text-pink-200">
							12
						</span>
					</div>
				</div>
			</div>
			<p className="text-sm text-subText dark:text-dark-subText">
				Responsible for driving revenue growth by identifying and pursuing new
				business opportunities, as well as maintaining relationships with
				existing clients. working closely with customers to understand their
				needs and provide solutions that meet or exceed their expectations,
				while also achieving the company's sales goals.
			</p>
			<div className="flex flex-wrap gap-2">
				{btnType.map((type) => (
					<Button
						key={type}
						variant={type === "Design" ? "design" : "outline"}
						className={
							type === "Design"
								? "dark:bg-pink-900/20 dark:text-pink-200"
								: "dark:bg-dark-surface dark:text-dark-text dark:border-dark-border"
						}
					>
						{type}
					</Button>
				))}
			</div>
			<div className="flex items-center rounded-md px-4 py-0.5 gap-2">
				<img
					className="size-9 rounded-full"
					src="/assets/profile.jpeg"
					alt=""
				/>
				<div>
					<p className="text-dark dark:text-dark-text whitespace-nowrap mt-2">
						James Campion
					</p>
					<p className="text-subText dark:text-dark-subText whitespace-nowrap">
						Manager
					</p>
				</div>
				<ArrowLeft className="rotate-180 w-4 dark:text-dark-subText" />
			</div>
		</article>
	);
};

export default PosCard;
