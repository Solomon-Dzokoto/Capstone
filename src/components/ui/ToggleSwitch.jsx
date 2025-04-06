import React from "react";
import { cn } from "../../libs/cn";
import Skeleton from "./Skeleton";

const ToggleSwitch = ({
	enabled,
	onToggle,
	loading,
	title,
	description,
	className = "",
}) => {
	return (
		<div
			className={cn(
				`inline-flex  gap-3 items-center py-4  truncate bg-blue rounded-lg dark:rounded-none dark:border-dark-border border-b border-solid border-b-border  max-w-[483px] max-md:max-w-full`,
				className
			)}
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
				<h3 className="font-black text-dark">
					{loading ? (
						<Skeleton className="h-5 w-32" />
					) : (
						<span className=""> {title}</span>
					)}
				</h3>
				<p className="text-slate-400 truncate flex flex-wrap line-clamp-2 max-md:max-w-full">
					{loading ? (
						<Skeleton className="h-5 w-full" />
					) : (
						<span className=""> {description}</span>
					)}
				</p>
			</div>
		</div>
	);
};

export default ToggleSwitch;
