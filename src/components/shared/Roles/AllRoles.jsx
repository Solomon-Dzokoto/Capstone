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
		<div>
			<SearchFilterAndCo
				inputProps={{
					placeholder: "Search Roles by Title, Teams or any related keywords",
				}}
			/>
			<ul className="border-b   flex  border-border mt-4">
				{rolePosition.map((item) => (
					<li
						key={item.id}
						onClick={() => setActivePosition(item.id)}
						className={`flex ${
							activePosition === item.id
								? "text-primary  border-b-2 border-b-primary"
								: "text-subText"
						} items-center justify-between text-xs  flex-wrap px-3 transition-all duration-200 cursor-pointer md:text-sm  py-2`}
					>
						<p>{item.name}</p>
					</li>
				))}
			</ul>
			<div className="grid gap-6 grid-cols-1  mt-5 lg:grid-cols-2">
				<PosCard />
				<PosCard />
				<PosCard />
				<PosCard />
			</div>
		</div>
	);
};

export default AllRoles;
