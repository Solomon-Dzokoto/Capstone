import { cn } from "@libs/cn.js";
import { inputVariants } from "@/libs/tv";
import { Mark } from "@global/Icons.jsx";
import { Details } from "@global/Icons";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import usePassType from "@hooks/usePassType";

const Input = ({
	size,
	variant = "prime",
	fullWidth = true,
	className,
	children,
	...props
}) => {
	return (
		<div className="flex items-center w-full">
			{children}
			<input
				{...props}
				type="text"
				className={cn(inputVariants({ size, variant, fullWidth }), className)}
			/>
		</div>
	);
};

export default Input;

export const InputWithLabel = ({ label, Icon, ...props }) => {
	const [type, changeType] = usePassType();
	return (
		<div className="flex flex-col gap-2 w-full">
			<label className="text-xs md:text-sm font-medium text-gray-700 dark:text-dark-text">
				{label}
			</label>
			<div className="relative w-full">
				<input
					{...props}
					type={props?.type === "password" ? type : props?.type}
					className={cn(
						"w-full px-3 py-2 text-sm md:text-base border placeholder:text-xs md:placeholder:text-sm border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-dark-surface dark:text-dark-text",
						props?.className
					)}
				/>
				{Icon && (
					<div
						onClick={changeType}
						className="absolute right-4 cursor-pointer -translate-y-1/2 top-1/2"
					>
						{type === "password" ? <FaEye /> : <FaEyeSlash />}
					</div>
				)}
			</div>
		</div>
	);
};

export const CheckboxInput = ({ checked, label, ...props }) => {
	return (
		<div className="flex gap-x-2 items-center">
			<div className="relative">
				<input
					type="checkbox"
					{...props}
					className="appearance-none h-3 w-3 md:h-4 md:w-4 rounded border border-gray-400 checked:border-primary transition-all duration-200 cursor-pointer relative"
				/>
				{checked && (
					<Mark
						color="#792daf"
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-2.5 text-primary pointer-events-none"
					/>
				)}
			</div>
			<p className="text-xs md:text-sm text-gray-700 dark:text-dark-text">
				{label}
			</p>
		</div>
	);
};

export const TextareaField = ({ label, className, ...prop }) => {
	return (
		<div
			className={cn(
				"flex flex-col w-full min-h-[12rem] bg-white dark:bg-dark-surface rounded-lg border border-gray-300 dark:border-dark-border p-4",
				className
			)}
		>
			{label && (
				<div className="flex items-center justify-between mb-2">
					<span className="text-xs md:text-sm font-medium text-gray-700 dark:text-dark-text">
						{label}
					</span>
					<Details className="text-gray-400 dark:text-dark-subText" />
				</div>
			)}
			<textarea
				{...prop}
				className="flex-1 w-full bg-transparent resize-none text-sm md:text-base text-gray-700 dark:text-dark-text focus:outline-none"
			/>
		</div>
	);
};

export const InputField = ({ label, className, ...prop }) => {
	return (
		<div
			className={cn(
				"flex flex-col w-full bg-white dark:bg-dark-surface rounded-lg border border-gray-300 dark:border-dark-border p-4",
				className
			)}
		>
			{label && (
				<div className="flex items-center justify-between mb-2">
					<span className="text-xs md:text-sm font-medium text-gray-700 dark:text-dark-text">
						{label}
					</span>
					<Details className="text-gray-400 dark:text-dark-subText" />
				</div>
			)}
			<input
				{...prop}
				type="text"
				className="w-full bg-transparent text-sm md:text-base text-gray-700 dark:text-dark-text focus:outline-none"
			/>
		</div>
	);
};
