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
		<article className="flex flex-col p-4 md:p-6 lg:p-8 w-full border rounded-xl border-border dark:border-dark-border dark:bg-dark-surface">
			<div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-4">
				<div>
					<h2 className="text-base md:text-lg lg:text-xl font-medium text-dark dark:text-dark-text">
						Solution Sales Specialist
					</h2>
				</div>

				<div className="flex items-center gap-3">
					<div className="flex -space-x-3">
						{teamMembersImages.slice(0, 4).map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`Team member ${index + 1}`}
								className="w-8 h-8 border-2 border-white dark:border-dark-border rounded-full"
							/>
						))}
						<span className="flex items-center justify-center w-8 h-8 text-xs font-medium rounded-full bg-[#F7E8EF] dark:bg-pink-900/20 text-[#6A1039] dark:text-pink-200 border-2 border-white dark:border-dark-border">
							{teamMembersImages.length - 4}+
						</span>
					</div>
				</div>
			</div>

			<p className="text-sm text-subText dark:text-dark-subText mb-4">
				Responsible for driving revenue growth by identifying and pursuing new
				business opportunities, as well as maintaining relationships with
				existing clients. Working closely with customers to understand their
				needs and provide solutions that meet or exceed their expectations,
				while also achieving the company's sales goals.
			</p>

			<div className="flex flex-wrap gap-2 mb-4">
				{btnType.map((type) => (
					<Button
						key={type}
						variant={type === "Design" ? "design" : "outline"}
						className={`text-sm ${
							type === "Design"
								? "dark:bg-pink-900/20 dark:text-pink-200"
								: "dark:bg-dark-surface dark:text-dark-text dark:border-dark-border"
						}`}
					>
						{type}
					</Button>
				))}
			</div>

			<div className="flex items-center gap-3 pt-3 border-t border-border dark:border-dark-border">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src="/assets/profile.jpeg"
					alt="Manager profile"
				/>
				<div className="flex-1">
					<p className="text-sm font-medium text-dark dark:text-dark-text">
						James Campion
					</p>
					<p className="text-xs text-subText dark:text-dark-subText">Manager</p>
				</div>
				<ArrowLeft className="rotate-180 w-4 h-4 text-subText dark:text-dark-subText" />
			</div>
		</article>
	);
};

export default PosCard;
