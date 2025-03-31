import React from "react";
import ScheduleCard from "./ScheduleCard";
import LeaveBalance from "./LeaveBalance";
import AttendanceSummary from "./AttendanceSummary";

const DashboardSideComp = () => {
	return (
		<div className="space-y-6">
			<section>
				<header className="flex justify-between items-center px-4 py-6">
					<h2 className="text-base font-bold text-dark">Schedule</h2>
					<button className="text-sm text-subText hover:text-dark transition-colors">
						View all
					</button>
				</header>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
					<ScheduleCard />
					<ScheduleCard />
				</div>
			</section>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
				<LeaveBalance />
				<AttendanceSummary />
			</div>
		</div>
	);
};

export default DashboardSideComp;
