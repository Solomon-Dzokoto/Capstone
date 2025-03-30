import Button from "@components/ui/Button";
import { Dropdown } from "@/global/Icons";
import { useState } from "react";
import { cn } from "../../libs/cn";

const Table = ({
  columns,
  data,
  className = "",
  isCheck = true,
  actions = [],
}) => {
  const [activeSelect, setActiveSelect] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  console.log(selectedRows);

  const getFirstLetters = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((letters) => letters[0])
      .join("");
  };

  const selectAll = () => {
    if (selectedRows.length !== data?.length) {
      setSelectedRows(data.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };
  const onRowClick = (id) => {
    setSelectedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };
  const renderCell = (column, item) => {
    if (column.render) {
      return column.render(item);
    }

    const value = item[column.field];

    if (column.type === "image") {
      return (
        <div className="flex items-center gap-3">
          {item?.image ? (
            <img
              className="rounded-full w-8 h-8 object-cover"
              src={item.image}
              alt={item[column.titleField] || ""}
            />
          ) : (
            <div className="rounded-full w-8 h-8 flex items-center justify-center text-[.85rem] text-brown font-700 bg-[#FFF2EA]">
              {getFirstLetters(item[column.titleField] || "")}
            </div>
          )}
          <div>
            <p className="text-dark whitespace-nowrap  text-xs font-medium">
              {item[column.titleField]}
            </p>
            {column.subtitleField && (
              <p className="text-subText text-xs">
                {item[column.subtitleField]}
              </p>
            )}
          </div>
        </div>
      );
    }

    if (column.type === "status") {
      return (
        <Button
          variant={
            value?.toLowerCase() === "rejected"
              ? "inactive"
              : value?.toLowerCase()
          }
          className="min-w-[100px] "
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
          <span className="text-xs ">{value}</span>
        </Button>
      );
    }

    {
      /**
			{
		id: 2,
		Type: "Letter",
		Details: ["Details like category", "+1"],
		Approver: "Tassy Omah",
		Status: "Active",
		"Date Requested": "Mar 18, 2023",
		time: "12:25PM",
	}, */
    }
    if (column.type === "tags") {
      return (
        <div className="flex flex-nowrap gap-2">
          {(value || []).map((tag) => (
            <Button
              key={tag}
              variant={tag === "Design" ? "design" : "outline"}
              className="text-xs whitespace-nowrap py-1"
            >
              {tag}
            </Button>
          ))}
        </div>
      );
    }

    return value;
  };

  return (
    <>
      {isCheck && (
        <p className="text-xs mt-4 text-text ">
          {" "}
          {(selectedRows && selectedRows?.length) || 0} of {data?.length}{" "}
          selected{" "}
        </p>
      )}
      <div className="w-full mt-2 overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table
          className={cn("w-full min-w-[800px] border-collapse", className)}
        >
          <thead>
            <tr className="bg-[#FAFBFB] border-b border-gray-200">
              {isCheck && (
                <th className="w-[40px] px-4 py-3 text-left whitespace-nowrap tracking-wider text-[.85rem] font-[500]">
                  <input
                    checked={
                      selectedRows.length === data?.length && data?.length > 0
                    }
                    onChange={selectAll}
                    type="checkbox"
                    className="rounded accent-primary"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  className={cn(
                    "px-4 py-3 text-left whitespace-nowrap tracking-wider text-[.85rem] font-[500] text-gray-700"
                  )}
                  key={column.field}
                >
                  <div className="flex items-center gap-1">{column.title}</div>
                </th>
              ))}
              {actions.length > 0 && <th></th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b relative border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {isCheck && (
                  <td className="w-[40px] px-4 py-3">
                    <input
                      checked={selectedRows?.includes(item.id)}
                      onChange={() => onRowClick(item.id)}
                      type="checkbox"
                      className="rounded accent-primary"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.field}
                    className="px-3 whitespace-nowrap py-3"
                  >
                    {renderCell(column, item)}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td
                    className="relative cursor-pointer"
                    onClick={() => {
                      setActiveSelect(item.id);
                      setIsOpen((prev) => activeSelect !== item.id || !prev);
                    }}
                  >
                    <Dropdown />
                    {activeSelect === item.id && isOpen && (
                      <div className="absolute top-12 right-8 w-fit rounded-md min-w-[8rem] z-10 bg-white shadow-lg p-2">
                        <ul>
                          {actions.map((action) => (
                            <li
                              key={action.id}
                              className="flex py-2 text-[.7rem] cursor-pointer hover:bg-gray-200 items-center"
                              onClick={(e) => {
                                e.stopPropagation();
                                action.onClick(item);
                              }}
                            >
                              {action.icon && (
                                <action.icon className="w-4 h-4 text-subText mr-2" />
                              )}
                              <span className="text-dark">{action.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
