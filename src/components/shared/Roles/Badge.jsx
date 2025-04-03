import React from "react";
import { Close } from "../../../global/Icons";

const Badge = ({ image, name, onRemove }) => {
	return (
		<div className="flex items-start bg-blend-multiply min-h-[33px]">
			<div className="flex gap-1 justify-center items-center py-2 pr-2 pl-2.5 rounded-2xl bg-neutral-100 dark:bg-dark-surface min-h-[33px]">
				{image && (
					<img
						src={image}
						className="object-contain shrink-0 self-stretch my-auto aspect-square min-h-[18px] rounded-[200px] w-[18px]"
						alt={name}
					/>
				)}
				<span className="self-stretch my-auto text-sm font-medium text-dark dark:text-dark-text">
					{name}
				</span>
				<button onClick={onRemove && onRemove}>
					<Close className="text-subText dark:text-dark-subText" />
				</button>
			</div>
		</div>
	);
};

export default Badge;
