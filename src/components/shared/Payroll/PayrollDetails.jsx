import React, { useState } from "react";
import { ArrowLeft, Details, Download } from "@global/Icons";
import Button from "@components/ui/Button";
import { useNavigate } from "react-router-dom";
import Tooltip from "@components/ui/Tooltip";

const PayrollDetails = () => {
	const navigate = useNavigate();
	const [hover, setHover] = useState(false);

	const employeeDetails = {
		name: "James Muriel",
		email: "james.m@company.com",
		employeeId: "EMP001",
		position: "Senior Developer",
		department: "Engineering",
		baseSalary: 90000,
		paymentStatus: "Pending",
		lastPayment: "Feb 28, 2025",
		bankDetails: {
			accountName: "James Muriel",
			accountNumber: "****4321",
			bankName: "Chase Bank",
		},
		paymentHistory: [
			{
				date: "Feb 28, 2025",
				amount: 7500,
				status: "Processed",
			},
			{
				date: "Jan 31, 2025",
				amount: 7500,
				status: "Processed",
			},
		],
	};

	return (
		<main className="p-4 md:p-6">
			<button
				onClick={() => navigate(-1)}
				className="flex items-center gap-2 text-subText mb-4"
			>
				<ArrowLeft className="w-4 h-4" />
				Payroll
			</button>

			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
				<div className="flex items-center gap-2">
					<h2 className="font-bold font-[Space] text-xl md:text-[1.5rem] leading-6">
						Employee Payroll Details
					</h2>
					<span
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						className="relative cursor-help"
					>
						<Details />
						{hover && (
							<Tooltip>
								<p>View and manage employee payroll details</p>
							</Tooltip>
						)}
					</span>
				</div>
				<Button variant="ghost" size="md">
					<Download />
					<p>Export Details</p>
				</Button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 space-y-6">
					<div className="bg-white rounded-lg border border-border p-4 md:p-6">
						<h3 className="text-lg font-semibold text-dark mb-4">
							Employee Information
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<p className="text-subText text-sm font-medium">Name</p>
								<p className="font-normal text-dark">{employeeDetails.name}</p>
							</div>
							<div>
								<p className="text-subText text-sm font-medium">Employee ID</p>
								<p className="font-normal text-dark">
									{employeeDetails.employeeId}
								</p>
							</div>
							<div>
								<p className="text-subText text-sm font-medium">Position</p>
								<p className="font-normal text-dark">
									{employeeDetails.position}
								</p>
							</div>
							<div>
								<p className="text-subText text-sm font-medium">Department</p>
								<p className="font-normal text-dark">
									{employeeDetails.department}
								</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg border border-border p-4 md:p-6">
						<h3 className="text-lg font-semibold text-dark mb-4">
							Payment History
						</h3>
						<div className="space-y-4">
							{employeeDetails.paymentHistory.map((payment, index) => (
								<div
									key={index}
									className="flex justify-between items-center p-4 border border-border rounded-lg"
								>
									<div>
										<p className="text-sm font-medium text-dark">
											{payment.date}
										</p>
										<p className="text-sm text-subText">Monthly Salary</p>
									</div>
									<div className="text-right">
										<p className="text-sm font-medium text-dark">
											${payment.amount.toLocaleString()}
										</p>
										<p className="text-sm text-green-600">{payment.status}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="space-y-6">
					<div className="bg-white rounded-lg border border-border p-4 md:p-6">
						<h3 className="text-lg font-semibold text-dark mb-4">
							Salary Information
						</h3>
						<div className="space-y-4">
							<div>
								<p className="text-subText text-sm font-medium">Base Salary</p>
								<p className="text-xl font-bold text-dark">
									${employeeDetails.baseSalary.toLocaleString()}/year
								</p>
							</div>
							<div>
								<p className="text-subText text-sm font-medium">
									Monthly Payment
								</p>
								<p className="text-xl font-bold text-dark">
									${(employeeDetails.baseSalary / 12).toLocaleString()}
								</p>
							</div>
							<Button
								variant="secondary"
								className="w-full mt-4"
								onClick={() => navigate("process")}
							>
								Process Payment
							</Button>
						</div>
					</div>

					<div className="bg-white rounded-lg border border-border p-4 md:p-6">
						<h3 className="text-lg font-semibold text-dark mb-4">
							Bank Details
						</h3>
						<div className="space-y-4">
							<div>
								<p className="text-subText text-sm font-medium">Account Name</p>
								<p className="font-normal text-dark">
									{employeeDetails.bankDetails.accountName}
								</p>
							</div>
							<div>
								<p className="text-subText text-sm font-medium">
									Account Number
								</p>
								<p className="font-normal text-dark">
									{employeeDetails.bankDetails.accountNumber}
								</p>
							</div>
							<div>
								<p className="text-subText text-sm font-medium">Bank Name</p>
								<p className="font-normal text-dark">
									{employeeDetails.bankDetails.bankName}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PayrollDetails;
