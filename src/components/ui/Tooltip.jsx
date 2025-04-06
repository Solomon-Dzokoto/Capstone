import { cn } from "@libs/cn";

const Tooltip = ({ children, className }) => {
	return (
		<div
			className={cn(
				"bg-border dark:bg-dark-surface flex whitespace-nowrap text-[.6rem] text-dark dark:text-dark-text absolute top-4 left-4 w-auto py-3 px-6 rounded-3xl shadow-lg dark:shadow-dark-bg/20 border border-transparent dark:border-dark-border",
				className
			)}
		>
			{children}
		</div>
	);
};

export default Tooltip;
