import React, { useState } from "react";
import SearchFilterAndCo from "./SearchFilterAndCo";
import PosCard from "./PosCard";
import { useQuery } from "@tanstack/react-query";
import { getAllRoles } from "@api/roles";
import Spinner from "../../ui/Spinner";

const rolePosition = [
  { id: "all", name: "All" },
  { id: "product", name: "Product" },
  { id: "engineering", name: "Engineering" },
  { id: "recruitment", name: "Recruitment" },
  { id: "sales", name: "Sales" },
  { id: "customer", name: "Customer Service" },
];

const AllRoles = () => {
  const [activePosition, setActivePosition] = useState("general");

  const { data: roles, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      const data = await getAllRoles();
      return data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  console.log("Roles :", roles);
  return (
    <div className="space-y-6">
      <SearchFilterAndCo
        inputProps={{
          placeholder: "Search Roles by Title, Teams or any related keywords",
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
        {roles &&
          roles?.map((role) => (
            <PosCard
              key={role?.id}
              id={role?.id}
              title={role?.title}
              description={role?.description}
            />
          ))}
        {isLoading && <Spinner className="w-10 h-10 mx-auto" />}
      </div>
    </div>
  );
};

export default AllRoles;
