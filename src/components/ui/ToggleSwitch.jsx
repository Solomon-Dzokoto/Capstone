"use client";
import React from "react";

const ToggleSwitch = ({
	enabled,
	onToggle,
	title,
	description,
	className = "",
}) => {
	return (
		<div
			className={`inline-flex  gap-3 items-center py-4  bg-blue rounded-lg dark:rounded-none dark:border-dark-border border-b border-solid border-b-border  max-w-[483px] min-h-[72px] max-md:max-w-full ${className}`}
		>
			<button
				onClick={onToggle}
				className={`inline-flex overflow-hidden flex-shrink-0 items-center  p-0.5 my-auto ${
					enabled ? "bg-primary" : "bg-border dark:bg-gray-400"
				} rounded-xl min-h-5 w-[2.3rem] transition-colors duration-200`}
				role="switch"
				aria-checked={enabled}
			>
				<div
					className="flex my-auto w-4 h-4 bg-white rounded-full min-h-4 transition-transform duration-200"
					style={{ transform: enabled ? "translateX(100%)" : "translateX(0)" }}
				/>
			</button>

			<div className="grow shrink  my-auto text-sm leading-none min-w-60 w-[428px] max-md:max-w-full">
				<h3 className="font-black text-dark">{title}</h3>
				<p className="text-slate-400 max-md:max-w-full">{description}</p>
			</div>
		</div>
	);
};

export default ToggleSwitch;
