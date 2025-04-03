import {
	ResponsiveContainer,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	Legend,
} from "recharts";

const data = [
	{ metric: "Productivity", average: 85, topPerformers: 95, department: 90 },
	{ metric: "Quality", average: 88, topPerformers: 98, department: 92 },
	{ metric: "Teamwork", average: 90, topPerformers: 95, department: 88 },
	{ metric: "Innovation", average: 75, topPerformers: 92, department: 82 },
	{ metric: "Leadership", average: 82, topPerformers: 94, department: 86 },
	{ metric: "Communication", average: 87, topPerformers: 96, department: 89 },
];

const PerformanceChart = () => {
	return (
		<div className="w-full p-3 sm:p-4 md:p-6 bg-white rounded-xl shadow-sm">
			<h3 className="text-base md:text-lg font-semibold mb-3 md:mb-6 text-dark">
				Performance Metrics Analysis
			</h3>
			<div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
						<PolarGrid stroke="#EFF1F4" />
						<PolarAngleAxis dataKey="metric" stroke="#6B788E" />
						<PolarRadiusAxis stroke="#6B788E" />
						<Radar
							name="Department Average"
							dataKey="department"
							stroke="#B665BC"
							fill="#B665BC"
							fillOpacity={0.4}
						/>
						<Radar
							name="Top Performers"
							dataKey="topPerformers"
							stroke="#792daf"
							fill="#792daf"
							fillOpacity={0.4}
						/>
						<Radar
							name="Company Average"
							dataKey="average"
							stroke="#F195C3"
							fill="#F195C3"
							fillOpacity={0.4}
						/>
						<Legend />
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default PerformanceChart;
