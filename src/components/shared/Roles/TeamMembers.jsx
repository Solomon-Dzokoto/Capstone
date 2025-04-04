import React from "react";

const TeamMember = ({ image, name, role }) => {
	return (
		<div className="w-full">
			<div className="flex items-center gap-3 p-3 bg-white dark:bg-dark-surface rounded-lg border border-border dark:border-dark-border">
				<img
					src={image}
					alt={name}
					className="w-8 h-8 rounded-full object-cover flex-shrink-0"
				/>
				<div className="flex-1 min-w-0">
					<h3 className="text-sm font-medium text-dark dark:text-dark-text truncate">
						{name}
					</h3>
					{role && (
						<p className="text-xs text-subText dark:text-dark-subText truncate">
							{role}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
