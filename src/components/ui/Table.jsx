import Button from "@components/ui/Button";
import {
  Dropdown,
  Assign,
  AddToTeam,
  ViewProfile,
  EditUser,
} from "@/global/Icons";
import { useState } from "react";

const editList = [
  {
    id: 1,
    name: "View Profile",
    icon: ViewProfile,
    onClick: () => console.log("View Profile Clicked"),
  },
  {
    id: 2,
    name: "Add to Team",
    icon: AddToTeam,
    onClick: () => console.log("Team Clicked"),
  },
  {
    id: 3,
    name: "Edit employee",
    icon: EditUser,
    onClick: () => console.log("Edit Clicked"),
  },
  {
    id: 4,
    name: "Assign a role",
    icon: Assign,
    onClick: () => console.log("Assign Clicked"),
  },
];
const Table = ({ headList, dataList }) => {
  const [activeSelect, setActiveSelect] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const getFirstLetters = (name) => {
    return name
      .split(" ")
      .map((letters) => letters[0])
      .join("");
  };

  const ifClickMore = (id) => {
    setActiveSelect(id);
    setIsOpen((prev) => !prev);
    if (id !== activeSelect) return;
  };

  return (
    <div className="w-full mt-4 overflow-x-auto rounded-lg shadow-sm border border-gray-200">
      <table className="w-full min-w-[800px] border-collapse">
        <thead>
          <tr className="bg-[#FAFBFB] border-b border-gray-200">
            <th className="w-[40px] px-4 py-3 text-left whitespace-nowrap tracking-wider text-[.85rem] font-[500]">
              <input type="checkbox" className="rounded accent-primary" />
            </th>
            {headList.map((list) => (
              <th
                className="px-4 py-3 text-left whitespace-nowrap tracking-wider text-[.85rem] font-[500] text-gray-700"
                key={list}
              >
                {list}
              </th>
            ))}
            {dataList.map((list) => {
              if (!list.icon) return;
              return <th>{""}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataList.map((list) => (
            <tr
              key={list.id}
              className="border-b relative  border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="w-[40px] px-4 py-3">
                <input type="checkbox" className="rounded  accent-primary" />
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  {list?.image ? (
                    <img
                      className="rounded-full w-8 h-8 object-cover"
                      src={list.image}
                      alt={list?.name}
                    />
                  ) : (
                    <div className="rounded-full w-8 h-8 flex items-center justify-center text-[.85rem] text-brown font-700 bg-[#FFF2EA]">
                      {getFirstLetters(list?.name)}
                    </div>
                  )}
                  <div>
                    <p className="text-dark whitespace-nowrap text-[.8rem] font-medium">
                      {list?.name}
                    </p>
                    <p className="text-subText text-[.85rem]">{list?.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 text-[.8rem] text-dark whitespace-nowrap">
                {list?.employeeId}
              </td>
              <td className="px-4 py-3">
                <div>
                  <p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
                    {list?.role}
                  </p>
                  <p className="text-[.8rem] text-subText">{list?.workType}</p>
                </div>
              </td>
              <td className="px-4 py-3">
                <Button
                  variant={list?.status?.toLowerCase()}
                  className="min-w-[100px]"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-[.8rem]">{list?.status}</span>
                </Button>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-nowrap gap-2">
                  {list?.teams?.map((item) => (
                    <Button
                      key={item}
                      variant={item === "Design" ? "design" : "outline"}
                      className="text-[.8rem] py-1"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </td>
              {list?.icon ? (
                <td
                  onClick={() => ifClickMore(list.id)}
                  className=" relative cursor-pointer"
                >
                  {" "}
                  <Dropdown />
                </td>
              ) : null}
              {activeSelect === list.id && isOpen && (
                <td className="absolute top-12 right-8 w-fit rounded-md min-w-[8rem] z-10 bg-white shadow-lg p-2">
                  <ul>
                    {editList.map((item) => (
                      <li
                        className="flex py-2 text-[.7rem] cursor-pointer hover:bg-gray-200 items-center"
                        onClick={item?.onClick}
                        key={item.id}
                      >
                        <item.icon className="w-4 h-4 text-subText mr-2" />
                        <span className="text-dark">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
