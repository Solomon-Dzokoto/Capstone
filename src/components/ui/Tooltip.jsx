import { cn } from "@libs/cn";

const Tooltip = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-border flex whitespace-nowrap text-[.6rem] text-dark absolute top-4 left-4  w-auto py-3 px-6 rounded-3xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tooltip;
