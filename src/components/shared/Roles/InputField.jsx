import React from "react";

const InputField = ({ label, value, icon, multiline, className = "" }) => {
	return (
		<div className={`w-full ${className}`}>
			<div className="w-full">
				<div className="flex overflow-hidden flex-col justify-center px-3.5 py-1 w-full bg-white dark:bg-dark-surface rounded-md border border-solid border-[#C2C7D0] dark:border-dark-border min-h-[52px]">
					{label && (
						<div className="text-xs font-medium leading-loose text-gray-400 dark:text-dark-subText">
							{label}
						</div>
					)}
					<div className="flex gap-2 items-center w-full">
						<div
							className={`flex-1 shrink self-stretch ${
								multiline ? "text-sm leading-6" : ""
							} text-gray-500 dark:text-dark-text basis-0`}
						>
							{value}
						</div>
						{icon && (
							<img
								src={icon}
								className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
								alt=""
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputField;
