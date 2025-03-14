import {tv} from "tailwind-variants"

export const inputVariants = tv({
    base:"p-2  rounded-md w-[16rem] focus:outline-none ",
    variants:{
        choice : {
            prime:" focus:border-transparent",
            sub:"order-red-500 "
        },
        size :{
      sm: " text-sm py-1",
      md: "text-base py-2",
      lg: "text-lg py-3"
        },
        fullWidth:{
           true:"w-full" ,
           false:"w-auto"
        }
    },
    defaultVariants:{
        choice:"prime",
        size:"sm"
    },
    compoundVariants:[
       {
  choice : "prime",
  class:"focus:outline"
       },
       {
 choice: "sub",
 class: "focus:outline focus:ring-red-500"
       },
    ]
})


export const buttonVariant = tv({
    base:"flex transform py-[0.2rem] items-center px-2 translate-x-auto",
    variants:{
        variant:{
        primary:"bg-primary text-white ",
        secondary:"",
        ghost:"",
        active:"bg-[#F9F5FF] text-primary rounded-[1rem] ",
        inactive:""
        },
        size:{
         default:"w-auto",
         lg:"",
         md:"",
         sm:"",
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
            class:"bg-gray-200"
        }
    ]
})