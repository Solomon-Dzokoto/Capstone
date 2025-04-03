import {
	ResponsiveContainer,
	Tooltip,
	Legend,
	PieChart,
	Pie,
	Cell,
} from "recharts";

const data = [
	{ name: "Applied", value: 150, color: "#B665BC" },
	{ name: "Screening", value: 85, color: "#792daf" },
	{ name: "Interview", value: 45, color: "#F195C3" },
	{ name: "Technical", value: 30, color: "#6B788E" },
	{ name: "Offer", value: 15, color: "#027A48" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const RecruitmentChart = () => {
	return (
		<div className="w-full p-3 sm:p-4 md:p-6 bg-white dark:bg-dark-surface text-dark dark:text-light rounded-xl shadow-sm">
			<h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 text-dark">
				Recruitment Pipeline Status
			</h3>
			<div className="w-full h-[250px] sm:h-[300px] md:h-[400px]">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={150}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
						<Tooltip
							formatter={(value) => `${value} candidates`}
							contentStyle={{
								backgroundColor: "white",
								border: "1px solid #EFF1F4",
								borderRadius: "8px",
							}}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default RecruitmentChart;
