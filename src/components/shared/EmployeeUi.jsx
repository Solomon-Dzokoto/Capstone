import {
  Details,
  Download,
  Avatar,
  Search,
  Filter,
  MoreLike,
  Edit,
} from "@/global/Icons";
import Button from "@components/ui/Button";
import { useState } from "react";
import Input from "@components/ui/Input";
import { employees } from "../../data/list";
import Table from "@components/ui/Table";

const data = [
  { id: "employee", value: "All Employees" },
  { id: "teams", value: "Teams" },
  { id: "role", value: "Roles" },
];

const dataHead = ["Name", "Employee ID", "Role", "Status", "Team"];
const EmployeeUi = () => {
  const [active, setActive] = useState("employees");

  return (
    <main>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-bold font-[Space]  text-[1.5rem] leading-6 ">
            Employees
          </h2>
          <Details />
          <Button
            variant="design"
            className="text-[.7rem] bg-border "
            size="sm"
          >
            100
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="md">
            <Download />
            <p>Export</p>
          </Button>
          <Button variant="secondary" size="md">
            <Avatar />
            <p>New Employee</p>
          </Button>
        </div>
      </div>
      <ul className="border-b mt-4 flex gap-4 border-b-border">
        {data.map((item) => (
          <li
            onClick={() => setActive(item.id)}
            className={` ${
              item.id === active
                ? "border-b-2 px-1 pb-4 text-primary border-b-primary"
                : "text-text"
            } cursor-pointer font-mono font-medium text-[.9rem] tracking-wider `}
            key={item?.id}
          >
            {item?.value}
          </li>
        ))}
      </ul>
      <div className="py-1 px-4 mt-2 rounded-[7px] flex justify-between border border-border">
        <Input
          className="w-[20rem]"
          placeholder="Search Employee by name,role, ID or any related keywords"
        >
          <Search />
        </Input>
        <div className="flex items-center gap-2">
          <Button className="mr-2" variant="ghost">
            <Filter />
            <p>Filter</p>
          </Button>
          <Button className="bg-[#EFEFEF] " size="sm" variant="ghost">
            <Edit />
          </Button>
          <Button size="sm" className="py-2" variant="ghost">
            <MoreLike />
          </Button>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <Table headList={dataHead} dataList={employees} />
      </div>
    </main>
  );
};

export default EmployeeUi;
