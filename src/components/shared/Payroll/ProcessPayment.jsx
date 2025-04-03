import React, { useState } from "react";
import { ArrowLeft, Details } from "@/global/Icons";
import Button from "@components/ui/Button";
import { useNavigate } from "react-router-dom";
import Tooltip from "@components/ui/Tooltip";
import Input from "@components/ui/Input";
import CustomSelect from "@components/ui/CustomSelect";

const ProcessPayment = () => {
	const navigate = useNavigate();
	const [hover, setHover] = useState(false);
	const [formData, setFormData] = useState({
		amount: "7500",
		paymentDate: "",
		paymentType: { value: "regular", label: "Regular Salary" },
		description: "",
		deductions: "0",
		additions: "0",
	});

	const paymentTypes = [
		{ value: "regular", label: "Regular Salary" },
		{ value: "bonus", label: "Bonus" },
		{ value: "commission", label: "Commission" },
		{ value: "overtime", label: "Overtime" },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Processing payment:", formData);

		navigate(-1);
	};

	return (
		<main className="p-4 md:p-6">
			<button
				onClick={() => navigate(-1)}
				className="flex items-center gap-2 text-subText mb-4"
			>
				<ArrowLeft className="w-4 h-4" />
				Back to Details
			</button>

			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
				<div className="flex items-center gap-2">
					<h2 className="font-bold font-[Space] text-xl md:text-[1.5rem] leading-6">
						Process Payment
					</h2>
					<span
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						className="relative cursor-help"
					>
						<Details />
						{hover && (
							<Tooltip>
								<p>Process payment for employee</p>
							</Tooltip>
						)}
					</span>
				</div>
			</div>

			<div className="max-w-2xl">
				<form
					onSubmit={handleSubmit}
					className="bg-white rounded-lg border border-border p-6 space-y-6"
				>
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-subText mb-2">
								Payment Amount (USD)
							</label>
							<Input
								type="number"
								value={formData.amount}
								onChange={(e) => {
									e.stopPropagation();
									setFormData({ ...formData, amount: e.target.value });
								}}
								className="w-full"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-subText mb-2">
								Payment Date
							</label>
							<Input
								type="date"
								value={formData.paymentDate}
								onChange={(e) =>
									setFormData({ ...formData, paymentDate: e.target.value })
								}
								className="w-full"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-subText mb-2">
								Payment Type
							</label>
							<CustomSelect
								options={paymentTypes}
								defaultValue={formData.paymentType}
								onChange={(option) =>
									setFormData({ ...formData, paymentType: option })
								}
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-subText mb-2">
								Description
							</label>
							<Input
								type="text"
								value={formData.description}
								onChange={(e) =>
									setFormData({ ...formData, description: e.target.value })
								}
								className="w-full"
								placeholder="Enter payment description"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-medium text-subText mb-2">
									Deductions
								</label>
								<Input
									type="number"
									value={formData.deductions}
									onChange={(e) =>
										setFormData({ ...formData, deductions: e.target.value })
									}
									className="w-full"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-subText mb-2">
									Additions/Bonus
								</label>
								<Input
									type="number"
									value={formData.additions}
									onChange={(e) =>
										setFormData({ ...formData, additions: e.target.value })
									}
									className="w-full"
								/>
							</div>
						</div>
					</div>

					<div className="pt-6 border-t border-border">
						<div className="flex justify-between items-center mb-4">
							<span className="text-sm font-medium text-subText">
								Total Amount:
							</span>
							<span className="text-xl font-bold text-dark">
								$
								{(
									parseFloat(formData.amount) -
									parseFloat(formData.deductions) +
									parseFloat(formData.additions)
								).toLocaleString()}
							</span>
						</div>

						<div className="flex gap-4">
							<Button
								type="button"
								variant="ghost"
								className="flex-1"
								onClick={() => navigate(-1)}
							>
								Cancel
							</Button>
							<Button type="submit" variant="secondary" className="flex-1">
								Process Payment
							</Button>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ProcessPayment;
