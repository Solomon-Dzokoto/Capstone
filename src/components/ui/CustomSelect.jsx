import { useState, useRef, useEffect } from "react";
import { cn } from "../../libs/cn";
import { SelectVariants } from "../../libs/tv";
import { Search, ArrowDown } from "../../global/Icons";

const represent = [
  { label: "", value: "Select" },
  { label: "money", value: "Money" },
  { label: "god", value: "God" },
  { label: "good", value: "Grace" },
];

const CustomSelect = ({
  options = represent,
  defaultValue = represent[0],
  // onChange,
  size = "xl",
  variant = "default",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const selectRef = useRef(null);

  // update selected option when defaultValue changes
  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const ifClickedOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", ifClickedOutside);
    return () => document.removeEventListener("mousedown", ifClickedOutside);
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredOptions(options);
    } else {
      const filteredSearch = options.filter((option) =>
        option?.label.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredOptions(filteredSearch);
    }
  }, [search, options]);

  const onSearch = (e) => {
    e.stopPropagation();
    setSearch(e.target.value);
  };

  const onSelect = (option) => {
    setSelectedOption(option);
    setSearch("");
    setIsOpen(false);
    // onChange?.(option);
  };

  return (
    <div className="relative" ref={selectRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(SelectVariants({ variant, size }), className)}
      >
        {selectedOption?.icon && (
          <img
            src={selectedOption.icon}
            alt={selectedOption?.label}
            className="size-4"
          />
        )}
        <p
          className={`flex-1 text-left px-3 ${
            selectedOption?.label ? "text-black" : "text-[#D0D2D7]"
          }`}
        >
          {selectedOption?.label ?? "Select option"}
        </p>
        <ArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute ${
            size === "xl"
              ? "min-w-[15.7rem]"
              : size === "lg"
              ? "min-w-[13rem]"
              : size === "sm"
              ? "w-[3.8rem]"
              : size === "md"
              ? "w-[5rem]"
              : "min-w-fit"
          } z-10 mt-1 w-fit rounded-md bg-white shadow-lg border border-[#E9EAEC]`}
        >
          <div className="p-2 border-b border-[#E9EAEC]">
            <div className="relative flex items-center">
              <Search className="absolute left-2 text-element-border w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={onSearch}
                onClick={(e) => e.stopPropagation()}
                placeholder="Search..."
                className="w-auto min-w-full px-2 py-1 text-sm border border-[#D0D2D7] rounded outline-none focus:border-[rgb(75,85,99)] pl-8"
              />
            </div>
          </div>
          <ul className="max-h-48 w-full overflow-auto rounded-md py-1">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => onSelect(option)}
                className={`px-3   flex items-center gap-2 py-2 cursor-pointer text-[.75rem] ${
                  selectedOption.value === option.value
                    ? "bg-primary text-white"
                    : "hover:bg-[rgb(219,234,254)] text-black"
                }`}
              >
                {option?.icon && (
                  <img
                    src={option.icon}
                    alt={option?.label}
                    className="w-4 h-4"
                  />
                )}
                {option?.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
