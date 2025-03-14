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