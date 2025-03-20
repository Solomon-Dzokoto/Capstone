import React, { useState } from "react";
import {
  Details,
  Download,
  Avatar,
  Search,
  Filter,
  MoreLike,
  Edit,
} from "@global/Icons";
import Button from "@components/ui/Button";
import Tooltip from "@components/ui/Tooltip";
import SearchFilterAndCo from "./SearchFilterAndCo";
import PosCard from "./PosCard";

const category = [
  { id: "all", name: "All roles" },
  { id: "permission", name: "Permission" },
];

const rolePositios = [
  { id: "all", name: "All" },
  { id: "product", name: "Product" },
  { id: "engineering", name: "Engineering" },
  { id: "recruitment", name: "Recruitment" },
  { id: "sales", name: "Sales" },
  { id: "customer", name: "Customer Service" },
];
const RoleView = () => {
  const [active, setActive] = useState("all");
  const [activePosition, setActivePosition] = useState("general");
  const [hover, setHover] = useState(false);
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-bold font-[Space]  text-[1.5rem] leading-6 ">
            Roles
          </h2>
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative"
          >
            <Details />
            {hover && (
              <Tooltip>
                <p>Manage employees activities or permission</p>
              </Tooltip>
            )}
          </span>

          <Button
            variant="design"
            className="text-[.7rem]  bg-border "
            size="sm"
          >
            123
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="md" className=" text-dark ">
            <Avatar className="text-gray-500" />
            <p>Assign</p>
          </Button>
          <Button variant="secondary" size="md">
            <Avatar className="text-white" />
            <p>New Employee</p>
          </Button>
        </div>
      </div>
      <ul className="border-b   flex  border-border mt-4">
        {category.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex ${
              active === item.id
                ? "text-primary  border-b-2 border-primary"
                : "text-subText"
            } items-center justify-between px-3 transition-all duration-200 cursor-pointer text-sm  py-2`}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <SearchFilterAndCo
        inputProps={{
          placeholder: "Search Roles by Title, Teams or any related keywords",
        }}
      />
      <ul className="border-b   flex  border-border mt-4">
        {rolePositios.map((item) => (
          <li
            key={item.id}
            onClick={() => setActivePosition(item.id)}
            className={`flex ${
              activePosition === item.id
                ? "text-primary  border-b-2 border-b-primary"
                : "text-subText"
            } items-center justify-between px-3 transition-all duration-200 cursor-pointer text-sm  py-2`}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 mt-5 grid-cols-2">
        <PosCard />
        <PosCard />
        <PosCard />
        <PosCard />
      </div>
    </section>
  );
};

export default RoleView;
