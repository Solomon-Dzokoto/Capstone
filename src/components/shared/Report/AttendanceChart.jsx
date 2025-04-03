import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{ month: "Jan", presentDays: 22, lateDays: 3, absentDays: 1, holidays: 4 },
	{ month: "Feb", presentDays: 20, lateDays: 2, absentDays: 2, holidays: 4 },
	{ month: "Mar", presentDays: 23, lateDays: 1, absentDays: 1, holidays: 6 },
	{ month: "Apr", presentDays: 21, lateDays: 2, absentDays: 2, holidays: 5 },
	{ month: "May", presentDays: 22, lateDays: 2, absentDays: 1, holidays: 6 },
	{ month: "Jun", presentDays: 20, lateDays: 3, absentDays: 2, holidays: 5 },
	{ month: "Jul", presentDays: 23, lateDays: 1, absentDays: 1, holidays: 6 },
];

const AttendanceChart = () => {
	return (
		<div className="w-full p-3 sm:p-4 md:p-6 bg-white dark:bg-dark-surface text-dark dark:text-light rounded-xl shadow-sm">
			<h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 text-dark">
				Monthly Attendance Overview
			</h3>
			<div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-x-auto">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<CartesianGrid strokeDasharray="3 3" stroke="#EFF1F4" />
						<XAxis dataKey="month" stroke="#6B788E" />
						<YAxis stroke="#6B788E" />
						<Tooltip
							contentStyle={{
								backgroundColor: "white",
								border: "1px solid #EFF1F4",
								borderRadius: "8px",
							}}
						/>
						<Legend />
						<Area
							type="monotone"
							dataKey="presentDays"
							name="Present Days"
							stroke="#027A48"
							fill="#027A48"
							strokeWidth={2}
						/>
						<Area
							type="monotone"
							dataKey="lateDays"
							name="Late Days"
							stroke="#792daf"
							fill="#792daf"
							strokeWidth={2}
						/>
						<Area
							type="monotone"
							dataKey="absentDays"
							name="Absent Days"
							stroke="#F15046"
							fill="#F15046"
							strokeWidth={2}
						/>
						<Area
							type="monotone"
							dataKey="holidays"
							name="Holidays"
							stroke="#F195C3"
							fill="#F195C3"
							strokeWidth={2}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AttendanceChart;
