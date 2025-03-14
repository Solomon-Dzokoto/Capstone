import { buttonVariant } from "@/libs/tv";
import { cn } from "../../libs/cn";

import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(buttonVariant({ variant, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
