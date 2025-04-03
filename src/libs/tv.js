import { tv } from "tailwind-variants";

export const inputVariants = tv({
	base: "px-2 rounded-md focus:outline-none focus:outline-none placeholder:text-[inherit] placeholder:w-full",
	variants: {
		variant: {
			prime:
				"w-full focus:border-transparent placeholder:text-subText dark:placeholder:text-dark-subtext",
			sub: "border-red-500 w-full  text-sm border rounded-lg  focus:border-primary dark:focus:border-dark-primary",
			ghost:
				"bg-white dark:bg-dark-surface text-text dark:text-dark-text border-border dark:border-dark-borde",
		},
		size: {
			sm: "text-sm py-1",
			md: "text-base py-2",
			lg: "text-lg py-3",
		},
		fullWidth: {
			true: "w-full",
			false: "w-auto",
		},
	},
	defaultVariants: {
		variant: "prime",
		size: "sm",
	},
	compoundVariants: [
		{
			variant: "prime",
			class: "focus:outline",
		},
		{
			variant: "sub",
			class: "focus:outline focus:ring-red-500",
		},
	],
});

export const buttonVariant = tv({
	base: "flex transform py-[0.2rem] gap-2 items-center px-2 item-center cursor-pointer justify-center rounded-lg translate-x-auto",
	variants: {
		variant: {
			primary:
				"bg-primary text-white dark:bg-dark-primary dark:text-dark-text hover:bg-primary/90 dark:hover:bg-dark-primary/90",
			secondary:
				"bg-secondary text-white dark:bg-dark-secondary dark:text-dark-text hover:bg-secondary/90 dark:hover:bg-dark-secondary/90",
			outline:
				"border border-border dark:border-dark-border text-text dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-hover",
			ghost:
				"text-text dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-hover",
			active:
				"bg-success/10 rounded-2xl text-success dark:bg-dark-success/10 dark:text-dark-success",
			inactive:
				"bg-danger/10 rounded-2xl text-danger dark:bg-dark-danger/10 dark:text-dark-danger",
			pending:
				"bg-secondary/10 rounded-2xl text-secondary dark:bg-dark-secondary/10 dark:text-dark-secondary",
			design:
				"bg-tertiary/10 rounded-2xl text-tertiary dark:bg-dark-accent/10 dark:text-dark-accent",
		},
		size: {
			default: "w-auto ",
			lg: "",
			md: "py-[.75rem] px-4",
			sm: "px-",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "default",
	},
	compoundVariants: [
		{
			variant: "primary",
			class: "",
		},
		{
			variant: "secondary",
			class: "",
		},
	],
});

export const SelectVariants = tv({
	base: "z-40 px-2 flex items-center dark:bg-dark-surface gap-2 justify-between rounded-[.5rem] border border-general-border hover:border-primary bg-white text-[.75rem] transition-colors",
	variants: {
		variant: {
			default: " w-auto",
		},
		size: {
			lg: " min-w-[13rem] h-[2.5rem]",
			md: " min-w-[5rem] h-[2.1rem]",
			sm: "w-[3.8rem] h-[2rem]",
			xl: "min-w-[15.7rem] text-[1rem]  h-[2.7rem]",
			custom: "",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "xl",
	},
});
