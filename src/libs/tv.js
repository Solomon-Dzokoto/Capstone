import {tv} from "tailwind-variants"

export const inputVariants = tv({
    base:"px-2 rounded-md focus:outline-none placeholder:text-[inherit] placeholder:w-full",
    variants:{
        variant : {
            prime:"w-full focus:border-transparent",
            sub:"border-red-500"
        },
        size :{
            sm: "text-sm py-1",
            md: "text-base py-2",
            lg: "text-lg py-3"
        },
        fullWidth:{
           true:"w-full" ,
           false:"w-auto"
        }
    },
    defaultVariants:{
        variant:"prime",
        size:"sm"
    },
    compoundVariants:[
       {
           variant : "prime",
           class:"focus:outline"
       },
       {
           variant: "sub",
           class: "focus:outline focus:ring-red-500"
       },
    ]
})

export const buttonVariant = tv({
    base:"flex transform py-[0.2rem] gap-2 items-center px-2 translate-x-auto",
    variants:{
        variant:{
        primary:"bg-primary text-white rounded-[.5rem]",
        secondary:"bg-secondary text-white rounded-[.5rem] ",
        ghost:"bg-white border-[#E6E7EC] border rounded-[.5rem]",
        active:"bg-[#F9F5FF] text-success rounded-[1rem] ",
        inactive:""
        },
        size:{
         default:"w-auto ",
         lg:"",
         md:"py-[.75rem] px-4",
         sm:"px-",
        }   
    },
    defaultVariants:{
        variant:"primary",
        size:"default"
    },
    compoundVariants:[
        {
            variant:"primary",
            class:""
        },
        {
            variant:"secondary",
            class:""
        }
    ]
})