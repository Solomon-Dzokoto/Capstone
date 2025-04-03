import { cn } from "@libs/cn.js";
import { inputVariants } from "@/libs/tv";
import { Mark } from "@global/Icons.jsx";
import { Details } from "../../global/Icons";
const Input = ({
	size,
	variant = "prime",
	fullWidth = true,
	className,
	children,
	...props
}) => {
	return (
		<div className="flex items-center ">
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

export const InputWithLabel = ({ label, ...props }) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="md:text-[0.875rem] text-[.7rem] font-medium text-gray-700">
				{label}
			</label>
			<input
				{...props}
				className={cn(
					"w-full px-3 py-2 border placeholder:text-[.6rem] md:placeholder:text-[1rem] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
					props?.className
				)}
			/>
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
						className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-2.5 text-primary pointer-events-none"
					/>
				)}
			</div>
			<p className="text-[.7rem] md:text-[.85rem] ">{label}</p>
		</div>
	);
};

export const TextareaField = ({ label, className, ...prop }) => {
	return (
		<div
			className={`flex dark:bg-dark-surface  flex-col justify-center px-3.5 py-1 w-full bg-white rounded-md border max-w-[20rem] h-[15rem] border-solid border-[#C2C7D0] ${className}`}
		>
			{label && (
				<div className="text-xs flex justify-between  font-medium leading-loose text-gray-400">
					{label}
					<Details />
				</div>
			)}
			<textarea
				{...prop}
				type="text"
				className="flex-1  focus:outline-none h-full shrink self-stretch text-sm leading-6 text-gray-500 basis-0"
			/>
		</div>
	);
};
export const InputField = ({ label, className, ...prop }) => {
	return (
		<div
			className={`flex  flex-col dark:bg-dark-surface justify-center px-3 py-2 w-auto max-w-[20rem] dark:text-gray-400  bg-white rounded-md border border-solid border-[#C2C7D0] ${className}`}
		>
			{label && (
				<div className="text-xs flex justify-between  font-medium leading-loose text-gray-400">
					{label}
				</div>
			)}
			<input
				{...prop}
				type="text"
				className="flex-1 focus:outline-none h-full shrink self-stretch text-sm leading-6 text-gray-500 basis-0"
			/>
		</div>
	);
};
