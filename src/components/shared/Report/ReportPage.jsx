import React, { useState } from "react";
import { Details, Download, Filter } from "@/global/Icons";
import Button from "@components/ui/Button";
import Tooltip from "@components/ui/Tooltip";
import { employees } from "@/data/list";
import { payrollData } from "@/data/payrollData";
import EmployeeCard from "./EmployeeCard";
import AttendanceChart from "./AttendanceChart";
import PayrollChart from "./PayrollChart";
import PerformanceChart from "./PerformanceChart";
import RecruitmentChart from "./RecruitmentChart";

const reportCategories = [
  { id: "overview", name: "Overview" },
  { id: "attendance", name: "Attendance" },
  { id: "payroll", name: "Payroll" },
  { id: "performance", name: "Performance" },
  { id: "recruitment", name: "Recruitment" },
];

const insights = [
  {
    id: 1,
    title: "Workplace Productivity",
    message:
      "Consistent attendance fosters a productive workplace. Understanding trends helps improve engagement and reduce absenteeism.",
  },
  {
    id: 2,
    title: "Payroll Transparency",
    message:
      "Payroll efficiency isn't just about numbers—it's about ensuring fairness, transparency, and employee satisfaction.",
  },
  {
    id: 3,
    title: "Performance Optimization",
    message:
      "Performance metrics tell a story. Use them to recognize strengths, address challenges, and drive continuous improvement.",
  },
];

const statsCards = [
  {
    title: "Total Employees",
    value: employees.length,
    change: "+12%",
    isPositive: true,
  },
  {
    title: "Active Projects",
    value: "24",
    change: "+5%",
    isPositive: true,
  },
  {
    title: "Total Payroll",
    value: `$${payrollData
      .reduce((acc, curr) => acc + (curr.salary || 0), 0)
      .toLocaleString()}`,
    change: "+8%",
    isPositive: true,
  },
  {
    title: "Attendance Rate",
    value: "96%",
    change: "-2%",
    isPositive: false,
  },
];

const ReportPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("This Month");
  const [hover, setHover] = useState(false);

  return (
    <main className="p-6 sm:p-8 md:p-10 bg-white dark:bg-dark-bg text-dark dark:text-light">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-7 text-dark dark:text-light">
            Reports & Analytics
          </h2>
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative cursor-help"
          >
            <Details />
            {hover && (
              <Tooltip className="w-[15rem] whitespace-normal ">
                <p>
                  View and analyze employee data, attendance, payroll, and
                  performance metrics
                </p>
              </Tooltip>
            )}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          {/* Date Range Picker */}
          <div className="flex items-center gap-3 border border-border dark:border-dark-border rounded-lg px-4 py-3 w-full sm:w-auto">
            <span className="text-sm text-subText dark:text-dark-subText">
              Period:
            </span>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="text-sm border-none bg-transparent outline-none flex-1 dark:text-light"
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
            </select>
          </div>
          {/* Export Report Button */}
          <Button
            variant="ghost"
            size="md"
            className="w-full sm:w-auto justify-center flex items-center gap-2"
          >
            <Download />
            <p>Export Report</p>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statsCards.map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-dark-surface p-5 md:p-6 rounded-xl border border-border dark:border-dark-border shadow-md"
          >
            <h3 className="text-sm text-subText dark:text-dark-subText mb-3">
              {stat.title}
            </h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl md:text-3xl font-bold text-dark dark:text-light">
                {stat.value}
              </p>
              <span
                className={`text-sm font-medium ${
                  stat.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 md:gap-5 border-b border-border dark:border-dark-border dark:bg-dark-surface  mb-6 pb-2 overflow-x-auto">
        {reportCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 dark:bg-dark-surface text-sm font-medium whitespace-nowrap transition-colors relative
							${
                activeTab === category.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-subText dark:text-dark-subText text-xs md:text-base hover:text-dark dark:hover:text-light"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        {/* Graphs/Charts */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-surface p-5 md:p-6 rounded-xl border border-border dark:border-dark-border shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-semibold text-dark dark:text-light">
              {activeTab === "overview"
                ? "Employee Statistics"
                : activeTab === "attendance"
                ? "Attendance Trends"
                : activeTab === "payroll"
                ? "Payroll Distribution"
                : activeTab === "performance"
                ? "Performance Metrics"
                : "Recruitment Pipeline"}
            </h3>
            <Button variant="ghost" size="sm">
              <Filter />
              <p>Filter</p>
            </Button>
          </div>
          <div className="h-[300px] sm:h-[400px] w-full flex items-center justify-center">
            {activeTab === "overview" && <EmployeeCard />}
            {activeTab === "attendance" && <AttendanceChart />}
            {activeTab === "payroll" && <PayrollChart />}
            {activeTab === "performance" && <PerformanceChart />}
            {activeTab === "recruitment" && <RecruitmentChart />}
          </div>
        </div>

        {/* Insights Section */}
        <div className="bg-white dark:bg-dark-surface p-5 md:p-6 rounded-xl border border-border dark:border-dark-border shadow-md">
          <h3 className="text-base md:text-lg font-semibold mb-5 text-dark dark:text-light">
            Key Insights
          </h3>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="p-4 rounded-lg border border-border dark:border-dark-border bg-white dark:bg-dark-surface shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <h4 className="text-sm font-medium text-dark dark:text-light">
                    {insight.title}
                  </h4>
                </div>
                <p className="text-sm text-subText dark:text-dark-subText">
                  {insight.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportPage;
