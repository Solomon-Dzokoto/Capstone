import React from "react";
import { InputWithLabel } from "../../ui/Input";
import { TextareaField, InputField } from "../../ui/Input";
import CustomSelect from "../../ui/CustomSelect";

const BasicDetailsSection = () => {
	return (
		<section className="w-full">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-6">
					<InputField label="Title/name" className="w-full" />
					<TextareaField label="Description or Purpose" className="w-full" />
				</div>

				<div className="space-y-6">
					<CustomSelect className="w-full h-[3.6rem]" />
					<CustomSelect className="w-full h-[3.6rem]" />
					<InputField
						type="tel"
						label="Salary and Benefits"
						className="w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default BasicDetailsSection;
