import { cn } from "../../libs/cn";

const Spinner = (className = "", size = "md") => {
	const sizes = {
		sm: "w-4 h-4",
		md: "w-12 h-12",
		lg: "w-16 h-16",
		xl: "w-20 h-20",
	};
	return (
		<div className={cn("flex justify-center items-center h-screen", className)}>
			<div
				className={`animate-spin border-t rounded-full border-b ${sizes[size]} border-primary `}
			/>
		</div>
	);
};

export default Spinner;
