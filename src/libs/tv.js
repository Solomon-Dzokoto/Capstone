import { tv } from "tailwind-variants";

export const inputVariants = tv({
	base: "px-2 rounded-md focus:outline-none placeholder:text-[inherit] placeholder:w-full",
	variants: {
		variant: {
			prime: "w-full focus:border-transparent",
			sub: "border-red-500",
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
	base: "flex transform py-[0.2rem] gap-2 items-center px-2 item-center cursor-pointer justify-center translate-x-auto",
	variants: {
		variant: {
			primary: "bg-primary text-white rounded-[.5rem]",
			secondary: "bg-secondary text-white rounded-[.5rem] ",
			ghost: "bg-white border-[#E6E7EC] border rounded-[.5rem]",
			active: "bg-[#ECFDF3]  w-fit  px-6 text-success rounded-[1rem] ",
			pending: "bg-yellow-500/10  w-fit  px-6 text-yellow-500 rounded-[1rem] ",
			inactive: "bg-[#FFF2EA] w-fit px-6 text-danger rounded-[1rem] ",
			design: "bg-[#F7E8EF] text-[#6A1039] rounded-[1rem] ",
			outline: "bg-border  rounded-[1rem] px-3 text-darker",
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
	base: "z-40 px-2 flex items-center gap-2 justify-between rounded-[.5rem] border border-general-border hover:border-primary bg-white text-[.75rem] transition-colors",
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
