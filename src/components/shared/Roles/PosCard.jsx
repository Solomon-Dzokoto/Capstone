import React from "react";
import { ArrowLeft } from "@global/Icons";
import Button from "@components/ui/Button";

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
		<article className="py-4 px-8 space-y-4 w-auto min-w-[29rem] border rounded-xl border-border h-fit min-h-[11.4rem] ">
			<div className="flex justify-between items-center ">
				<h1>Solution Sales Specialist</h1>
				<div className="flex gap-2">
					<div className="flex -space-x-4">
						{teamMembersImages.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="profile"
								className="w-8 h-8 border-2 border-border rounded-full"
							/>
						))}
						<span className="text-sm rounded-full border-2 border-white w-8 h-8 flex bg-[#F7E8EF] items-center justify-center text-[#6A1039]">
							12
						</span>
					</div>
				</div>
			</div>
			<p className="text-sm text-subText">
				Responsible for driving revenue growth by identifying and pursuing new
				business opportunities, as well as maintaining relationships with
				existing clients. working closely with customers to understand their
				needs and provide solutions that meet or exceed their expectations,
				while also achieving the company's sales goals.
			</p>
			<div className="flex gap-2">
				{btnType.map((type) => (
					<Button key={type} variant={type === "Design" ? "design" : "outline"}>
						{type}
					</Button>
				))}
			</div>
			<div className=" flex items-center rounded-md px-4 py-0.5 gap-2 ">
				<img
					className="size-9 rounded-full"
					src="/assets/profile.jpeg"
					alt=""
				/>
				<div>
					<p className="text-dark whitespace-nowrap mt-2">James Campion</p>
					<p className="text-subText whitespace-nowrap">Manager</p>
				</div>
				<ArrowLeft className="rotate-180 w-4" />
			</div>
		</article>
	);
};

export default PosCard;
