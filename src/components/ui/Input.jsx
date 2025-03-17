import { cn } from "@libs/cn.js";
import { inputVariants } from "@/libs/tv";

const Input = ({
  size,
  variant = "prime",
  fullWidth = true,
  className,
  children,
  ...props
}) => {
  return (
    <div className="flex items-center ">
      {children}
      <input
        {...props}
        type="text"
        className={cn(inputVariants({ size, variant, fullWidth }), className)}
      />
    </div>
  );
};

export default Input;
