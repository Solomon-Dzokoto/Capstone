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
