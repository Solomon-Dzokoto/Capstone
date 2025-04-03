import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		department: "Engineering",
		baseSalary: 180000,
		bonus: 15000,
		overtime: 8000,
	},
	{ department: "Design", baseSalary: 150000, bonus: 12000, overtime: 5000 },
	{ department: "Marketing", baseSalary: 130000, bonus: 10000, overtime: 4000 },
	{ department: "Sales", baseSalary: 140000, bonus: 20000, overtime: 6000 },
	{ department: "HR", baseSalary: 120000, bonus: 8000, overtime: 3000 },
	{ department: "Finance", baseSalary: 160000, bonus: 13000, overtime: 5000 },
];

const PayrollChart = () => {
	return (
		<div className="w-full p-6 bg-white rounded-xl shadow-sm">
			<h3 className="text-lg font-semibold mb-6 text-dark">
				Department Payroll Distribution
			</h3>
			<div className="w-full h-[400px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="3 3" stroke="#EFF1F4" />
						<XAxis dataKey="department" stroke="#6B788E" />
						<YAxis stroke="#6B788E" />
						<Tooltip
							contentStyle={{
								backgroundColor: "white",
								border: "1px solid #EFF1F4",
								borderRadius: "8px",
							}}
							formatter={(value) => `$${value.toLocaleString()}`}
						/>
						<Legend />
						<Bar
							dataKey="baseSalary"
							name="Base Salary"
							fill="#B665BC"
							radius={[4, 4, 0, 0]}
						/>
						<Bar
							dataKey="bonus"
							name="Bonus"
							fill="#792daf"
							radius={[4, 4, 0, 0]}
						/>
						<Bar
							dataKey="overtime"
							name="Overtime"
							fill="#F195C3"
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default PayrollChart;
