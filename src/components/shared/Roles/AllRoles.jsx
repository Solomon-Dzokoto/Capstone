import React, { useState, useEffect } from "react";
import SearchFilterAndCo from "./SearchFilterAndCo";
import PosCard from "./PosCard";
import { useQuery } from "@tanstack/react-query";
import { getAllRoles } from "@api/roles";
import RoleSkeleton from "./RoleSkeleton";

const rolePosition = [
  { id: "all", name: "All" },
  { id: "product", name: "Product" },
  { id: "engineering", name: "Engineering" },
  { id: "recruitment", name: "Recruitment" },
  { id: "sales", name: "Sales" },
  { id: "customer", name: "Customer Service" },
];

const AllRoles = () => {
  const [activePosition, setActivePosition] = useState("all");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data: roles, isLoading } = useQuery({
    queryKey: ["roles", debouncedSearch],
    queryFn: async () => {
      const data = await getAllRoles(debouncedSearch);
      return data;
    },
  });

  const filteredRoles = React.useMemo(() => {
    if (!roles) return [];

    return roles.filter((role) => {
      if (activePosition === "all") return true;

      return role?.title?.toLowerCase().includes(activePosition.toLowerCase());
    });
  }, [roles, activePosition]);

  return (
    <div className="space-y-6">
      <SearchFilterAndCo
        inputProps={{
          placeholder: "Search Roles by Title, Teams or any related keywords",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          onBlur: (e) => setSearch(e.target.value),
        }}
      />
      <div className="border-b border-border dark:border-dark-border overflow-x-auto">
        <div className="flex min-w-max">
          {rolePosition.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePosition(item.id)}
              className={`px-4 py-2 text-sm md:text-base transition-colors ${
                activePosition === item.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-subText dark:text-dark-subText hover:text-dark dark:hover:text-dark-text"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading
          ? [...Array(8)].map((_, index) => <RoleSkeleton key={index} />)
          : filteredRoles?.map((role) => (
              <PosCard
                key={role?.id}
                id={role?.id}
                title={role?.title}
                description={role?.description}
              />
            ))}
      </div>
    </div>
  );
};

export default AllRoles;
