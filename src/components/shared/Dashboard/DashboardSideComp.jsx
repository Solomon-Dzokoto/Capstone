import React from "react";
import ScheduleCard from "./ScheduleCard";
import LeaveBalance from "./LeaveBalance";
import AttendanceSummary from "./AttendanceSummary";

const DashboardSideComp = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="w-[346px] max-sm:w-full">
        <section>
          <header className="flex justify-between items-center px-3.5 py-8">
            <h1 className="text-base font-bold text-black">Schedule</h1>
            <button className="text-sm text-zinc-500">View all</button>
          </header>
          <div className="flex flex-col gap-3.5 px-3.5 py-0">
            <ScheduleCard />
            <ScheduleCard />
          </div>
        </section>

        <LeaveBalance />
        <AttendanceSummary />

        <section className="px-5 py-6 pb-8 mt-8 text-base font-bold text-black rounded-xl border border-solid border-zinc-100">
          <h2>Last Payslip</h2>
        </section>
      </main>
    </>
  );
};

export default DashboardSideComp;
