import Table from "@components/ui/Table";
import { data } from "@data/dashboardData";

const columns = [
  {
    field: "Type",
    title: "Type",
    sortable: true,
  },
  {
    field: "Details",
    title: "Details",
    type: "tags",
  },
  {
    field: "Approver",
    title: "Approver",
    render: (item) => (
      <div>
        <p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
          {item.Approver}
        </p>
        <p className="text-[.8rem] text-subText">{item.sub}</p>
      </div>
    ),
    sortable: true,
  },
  {
    field: "Status",
    title: "Status",
    type: "status",
  },
  {
    field: "Date Requested",
    title: "Date",
    render: (item) => (
      <div>
        <p className="text-[.8rem] text-dark whitespace-nowrap font-medium">
          {item["Date Requested"]}
        </p>
        <p className="text-[.8rem] text-subText">{item.time}</p>
      </div>
    ),
    sortable: true,
  },
];

const DashboardTableField = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <Table columns={columns} data={data} isCheck={false} />
    </div>
  );
};

export default DashboardTableField;
