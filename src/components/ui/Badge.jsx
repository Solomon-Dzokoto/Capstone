import React from "react";
import { Close } from "../../global/Icons";
import { getFirstLetters } from "../../store/useUserDetails";

const Badge = ({ image, name, onRemove }) => {
	const deleteBadge = (e) => {
		e.stopPropagation();
		if (onRemove) {
			onRemove();
		}
	};

	return (
		<div className="inline-flex items-center max-w-full">
			<div className="flex items-center gap-2 px-2 py-1.5 bg-neutral-100 dark:bg-dark-surface rounded-full overflow-hidden">
				{image ? (
					<img
						src={image}
						className="w-5 h-5 rounded-full object-cover flex-shrink-0"
						alt={name}
					/>
				) : (
					<span className="w-5 h-5 rounded-full text-xs flex items-center justify-center bg-[#d9e1fb] dark:bg-dark-surface flex-shrink-0">
						{getFirstLetters(name)}
					</span>
				)}
				<span className="text-sm text-dark dark:text-dark-text truncate">
					{name}
				</span>
				{onRemove && (
					<button
						type="button"
						className="p-1 hover:bg-neutral-200 dark:hover:bg-dark-hover rounded-full transition-colors flex-shrink-0"
						onClick={deleteBadge}
					>
						<Close className="w-3 h-3 dark:text-dark-subText" />
					</button>
				)}
			</div>
		</div>
	);
};

export default Badge;
