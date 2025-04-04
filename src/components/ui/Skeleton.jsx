import React from "react";
import { cn } from "@libs/cn";

const Skeleton = ({ className }) => {
	return (
		<div
			className={cn(
				`"animate-pulse flex items-center justify-center h-screen" `,
				className
			)}
		/>
	);
};

export default Skeleton;
