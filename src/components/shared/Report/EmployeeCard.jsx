import {
	ResponsiveContainer,
	Area,
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		month: "Jan",
		totalEmployees: 150,
		activeEmployees: 142,
		onLeave: 8,
		remote: 45,
	},
	{
		month: "Feb",
		totalEmployees: 155,
		activeEmployees: 145,
		onLeave: 10,
		remote: 48,
	},
	{
		month: "Mar",
		totalEmployees: 160,
		activeEmployees: 148,
		onLeave: 12,
		remote: 52,
	},
	{
		month: "Apr",
		totalEmployees: 165,
		activeEmployees: 158,
		onLeave: 7,
		remote: 55,
	},
	{
		month: "May",
		totalEmployees: 170,
		activeEmployees: 161,
		onLeave: 9,
		remote: 58,
	},
	{
		month: "Jun",
		totalEmployees: 175,
		activeEmployees: 160,
		onLeave: 15,
		remote: 62,
	},
	{
		month: "Jul",
		totalEmployees: 180,
		activeEmployees: 169,
		onLeave: 11,
		remote: 65,
	},
];

const EmployeeCard = () => {
	return (
		<div className="w-full p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-sm">
			<h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 text-dark">
				Employee Distribution Trends
			</h3>
			<div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-x-auto">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#B665BC" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#B665BC" stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#792daf" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#792daf" stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id="colorLeave" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#F195C3" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#F195C3" stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id="colorRemote" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#6B788E" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#6B788E" stopOpacity={0.1} />
							</linearGradient>
						</defs>
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
							dataKey="totalEmployees"
							name="Total Employees"
							stroke="#B665BC"
							fill="url(#colorTotal)"
							strokeWidth={2}
						/>
						<Area
							type="monotone"
							dataKey="activeEmployees"
							name="Active Employees"
							stroke="#792daf"
							fill="url(#colorActive)"
							strokeWidth={2}
						/>
						<Area
							type="monotone"
							dataKey="onLeave"
							name="On Leave"
							stroke="#F195C3"
							fill="url(#colorLeave)"
							strokeWidth={2}
						/>
						<Area
							type="monotone"
							dataKey="remote"
							name="Remote Workers"
							stroke="#6B788E"
							fill="url(#colorRemote)"
							strokeWidth={2}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default EmployeeCard;
