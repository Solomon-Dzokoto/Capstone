import React, { useState } from "react";
import SearchFilterAndCo from "./SearchFilterAndCo";
import PosCard from "./PosCard";

const rolePosition = [
	{ id: "all", name: "All" },
	{ id: "product", name: "Product" },
	{ id: "engineering", name: "Engineering" },
	{ id: "recruitment", name: "Recruitment" },
	{ id: "sales", name: "Sales" },
	{ id: "customer", name: "Customer Service" },
];

const AllRoles = () => {
	const [activePosition, setActivePosition] = useState("general");

	return (
		<div className="space-y-6">
			<SearchFilterAndCo
				inputProps={{
					placeholder: "Search Roles by Title, Teams or any related keywords",
				}}
			/>

			<div className="border-b border-border dark:border-dark-border overflow-x-auto">
				<div className="flex min-w-max">
					{rolePosition.map((item) => (
						<button
							key={item.id}
							onClick={() => setActivePosition(item.id)}
							className={`px-4 py-2 text-sm md:text-base transition-colors ${
								activePosition === item.id
									? "text-primary border-b-2 border-primary"
									: "text-subText dark:text-dark-subText hover:text-dark dark:hover:text-dark-text"
							}`}
						>
							{item.name}
						</button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<PosCard />
				<PosCard />
				<PosCard />
				<PosCard />
			</div>
		</div>
	);
};

export default AllRoles;
