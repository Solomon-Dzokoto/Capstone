import { StatusDot } from "@global/Icons";

const AttendanceSummary = () => {
	return (
		<div className="bg-white dark:bg-dark-surface p-4 md:p-6 rounded-xl border border-border dark:border-dark-border">
			<header className="flex justify-between items-center mb-6">
				<h2 className="text-base font-bold text-dark dark:text-dark-text">
					Attendance Summary
				</h2>
				<div className="px-2 py-1 text-xs text-dark dark:text-dark-text rounded-2xl bg-gray-100 dark:bg-dark-hover">
					October
				</div>
			</header>

			<div className="relative w-full h-7 mb-6">
				<div className="rounded bg-gray-100 dark:bg-dark-hover h-full" />
				<div className="absolute top-0 left-0 h-full w-[54%] bg-amber-500 dark:bg-amber-600 rounded" />
			</div>

			<div className="space-y-2">
				{[
					{ label: "22 Jan 2022", value: "0" },
					{ label: "Days with incomplete records", value: "0" },
					{ label: "Present days", value: "22" },
					{ label: "Absent days", value: "1" },
				].map((item, index) => (
					<div key={index}>
						<div className="flex items-center py-4 px-4">
							<div className="flex py-0.5 px-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
								<StatusDot />
							</div>
							<div className="flex-1 ml-2 text-sm text-subText dark:text-dark-subText">
								{item.label}
							</div>
							<div className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-dark-hover rounded-2xl text-dark dark:text-dark-text">
								{item.value}
							</div>
						</div>
						{index < 3 && (
							<div className="h-px bg-gray-200 dark:bg-dark-border" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default AttendanceSummary;
