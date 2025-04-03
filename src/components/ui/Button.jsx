import { buttonVariant } from "@/libs/tv";
import { cn } from "../../libs/cn";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

const Button = ({
	children,
	variant = "primary",
	size = "default",
	asChild,
	className,
	...props
}) => {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			{...props}
			className={cn(buttonVariant({ variant, size }), className)}
		>
			{children}
		</Comp>
	);
};

export default Button;

{
	/**import { cn } from "../../libs/cn";
import React from "react";

const Button = ({ children, className = "", variant = "primary", ...props }) => {
    const variants = {
        primary: "bg-primary text-white dark:bg-dark-primary dark:text-dark-text hover:bg-primary/90 dark:hover:bg-dark-primary/90",
        secondary: "bg-secondary text-white dark:bg-dark-secondary dark:text-dark-text hover:bg-secondary/90 dark:hover:bg-dark-secondary/90",
        outline: "border border-border dark:border-dark-border text-text dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-hover",
        ghost: "text-text dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-hover",
        active: "bg-success/10 text-success dark:bg-dark-success/10 dark:text-dark-success",
        inactive: "bg-danger/10 text-danger dark:bg-dark-danger/10 dark:text-dark-danger",
        pending: "bg-secondary/10 text-secondary dark:bg-dark-secondary/10 dark:text-dark-secondary",
        design: "bg-tertiary/10 text-tertiary dark:bg-dark-accent/10 dark:text-dark-accent",
    };

    return (
        <button
            className={cn(
                "flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
 */
}
