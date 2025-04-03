import {
	ArrowLeft,
	Details,
	Edit,
	MoreLike,
	ProfileAvatar,
} from "@global/Icons";
import Button from "@components/ui/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { employees } from "@data/list";

const category = [
	{ id: "general", name: "General Info" },
	{ id: "department", name: "Department" },
	{ id: "reminders", name: "Reminders" },
	{ id: "performance", name: "Performance" },
	{ id: "salary", name: "Salary and benefits" },
	{ id: "feedback", name: "Feedback" },
];

const teamMembersImages = [
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
	"/assets/profile.jpeg",
];

const teamMembers = [
	{
		name: "Tassy Omah",
		title: "Developer Relations, Payments",
		image: "/assets/profile.jpeg",
	},
	{
		name: "James Muriel",
		title: "Developer Relations, Payments",
		image: "/assets/profile.jpeg",
	},
];

const EmployeeDetailsPage = () => {
	const [active, setActive] = useState("general");
	const { id } = useParams();
	const employee = employees.find((employee) => employee?.id === Number(id));

	return (
		<section className="p-4 md:p-6 bg-white dark:bg-dark-bg ">
			<button
				onClick={() => window.history.back()}
				className="flex items-center gap-2 text-subText dark:text-dark-subText mb-4"
			>
				<ArrowLeft className="w-4 h-4" />
				Employees
			</button>

			<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
				<div className="flex items-center gap-2">
					<h2 className="text-xl md:text-2xl font-semibold text-dark dark:text-dark-text">
						{employee?.name || "Tanner Finsha"}
					</h2>
					<span className="bg-border dark:bg-dark-border rounded-2xl py-0.5 px-2 text-xs text-subText dark:text-dark-subText">
						#Employee ID:{" "}
						<span className="text-dark dark:text-dark-text">
							{employee?.employeeId || "23454GH6J7YT6"}
						</span>
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						className="flex items-center gap-2 dark:text-dark-text"
					>
						<ProfileAvatar className="w-4 h-4" />
						<span>Profile</span>
					</Button>
					<Button
						variant="ghost"
						className="py-2 text-subText dark:text-dark-subText text-sm rounded-lg"
					>
						<MoreLike />
					</Button>
				</div>
			</div>

			<div className="overflow-x-auto">
				<ul className="flex gap-4 border-b border-border dark:border-dark-border mb-6 whitespace-nowrap">
					{category.map((item) => (
						<li
							key={item.id}
							onClick={() => setActive(item.id)}
							className={`cursor-pointer px-3 py-2 text-sm transition-colors ${
								active === item.id
									? "border-b-2 border-primary text-primary dark:text-dark-primary"
									: "text-subText dark:text-dark-subText hover:text-dark dark:hover:text-dark-text"
							}`}
						>
							{item.name}
						</li>
					))}
				</ul>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 space-y-6">
					<div className="bg-white dark:bg-dark-surface rounded-lg border border-border dark:border-dark-border p-4 md:p-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<p className="text-subText dark:text-dark-subText text-sm font-medium">
									Email
								</p>
								<p className="font-normal text-dark dark:text-dark-text">
									invision@invisionapp.com
								</p>
							</div>
							<div>
								<p className="text-subText dark:text-dark-subText text-sm font-medium">
									Position
								</p>
								<p className="font-normal text-dark dark:text-dark-text">
									Senior Backend, Full time
								</p>
							</div>
							<div>
								<p className="text-subText dark:text-dark-subText text-sm font-medium">
									Phone
								</p>
								<p className="font-normal text-dark dark:text-dark-text">
									+144–3412–4422
								</p>
							</div>
							<div>
								<p className="text-subText dark:text-dark-subText text-sm font-medium">
									Work Location
								</p>
								<p className="font-normal text-dark dark:text-dark-text">
									New York, NY
								</p>
							</div>
							<div>
								<p className="text-subText dark:text-dark-subText text-sm font-medium">
									Join Date
								</p>
								<p className="font-normal text-dark dark:text-dark-text">
									12 April, 2022
								</p>
							</div>
							<div>
								<p className="text-subText dark:text-dark-subText text-sm font-medium">
									Date of Birth
								</p>
								<p className="font-normal text-dark dark:text-dark-text">
									12 April
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-dark-surface rounded-lg border border-border dark:border-dark-border p-4 md:p-6">
						<h2 className="text-lg font-bold text-dark dark:text-dark-text mb-4">
							Other details
						</h2>
						<div className="space-y-4">
							<p className="text-subText dark:text-dark-subText">
								2016 - 2021, BSC
							</p>
							<p className="text-dark dark:text-dark-text">
								Design Communication visuals,
							</p>
							<p className="text-[#B2BBC6] dark:text-dark-subText">
								Jember University
							</p>
						</div>
						<p className="mt-4 text-subText dark:text-dark-subText">
							Gender <br />
							<span className="font-normal text-dark dark:text-dark-text">
								Female
							</span>
						</p>
					</div>
				</div>

				<div className="space-y-6">
					<div className="bg-white dark:bg-dark-surface rounded-lg border border-border dark:border-dark-border p-4 md:p-6">
						<div className="border-b border-border dark:border-dark-border pb-4">
							<h2 className="text-sm text-subText dark:text-dark-subText mb-4">
								Teams:
							</h2>
							<div className="flex flex-wrap gap-2">
								<Button
									className="text-xs dark:text-dark-text"
									variant="outline"
								>
									Marketing team
								</Button>
								<Button
									className="text-xs dark:text-dark-text"
									variant="design"
								>
									Design and product team
								</Button>
							</div>
						</div>

						<div className="pt-4">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-sm font-medium text-[#47586E] dark:text-dark-text">
									Team Members
								</h2>
								<Button variant="raw" className="text-xs dark:text-dark-text">
									View all
									<ArrowLeft className="rotate-180 w-4" />
								</Button>
							</div>

							<div className="space-y-4">
								{teamMembers.map((member, index) => (
									<div
										key={index}
										className="flex items-center justify-between p-4 text-subText dark:text-dark-subText"
									>
										<div className="flex items-center gap-3">
											<img
												className="w-8 h-8 rounded-full"
												src={member.image}
												alt={member.name}
											/>
											<div>
												<p className="text-sm font-bold text-dark dark:text-dark-text">
													{member.name}
												</p>
												<p className="text-sm text-subText dark:text-dark-subText">
													{member.title}
												</p>
											</div>
										</div>
									</div>
								))}

								<div className="flex items-center gap-4">
									<div className="flex -space-x-4">
										{teamMembersImages.slice(0, 5).map((image, index) => (
											<img
												key={index}
												src={image}
												alt={`Team member ${index + 1}`}
												className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-border"
											/>
										))}
										<div className="w-10 h-10 rounded-full bg-tertiary dark:bg-dark-tertiary text-xs flex items-center justify-center border-2 border-white dark:border-dark-border">
											12+
										</div>
									</div>
									<p className="text-subText dark:text-dark-subText font-medium text-sm">
										Core team members
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white dark:bg-dark-surface rounded-lg border border-border dark:border-dark-border p-4 md:p-6">
						<h2 className="text-lg font-bold text-dark dark:text-dark-text mb-4">
							Role and Responsibilities
						</h2>
						<p className="text-subText dark:text-dark-subText">
							Designing products, organizing team meetings, screening and hiring
							product designers of all levels
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployeeDetailsPage;
