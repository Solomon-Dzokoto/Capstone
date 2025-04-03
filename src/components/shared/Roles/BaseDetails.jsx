import React from "react";
// import InputField from "./InputField";
import { InputWithLabel } from "../../ui/Input";
import { TextareaField, InputField } from "../../ui/Input";
import CustomSelect from "../../ui/CustomSelect";
const BasicDetailsSection = () => {
	return (
		<section className="max-w-full w-auto min-w-[60%]:">
			<div className="flex flex-wrap items-start max-md:mr-0.5">
				<div className="min-w-60 space-y-6  w-[347px]">
					<InputField label="Title/name" className="max-w-full " />
					<TextareaField label="Description or Purpose" />
				</div>

				<div className="text-sm space-y-6 leading-6 min-w-60 text-slate-500 w-[347px]">
					<CustomSelect className="w-[20rem] text-gray-700 h-[3.6rem] " />
					<CustomSelect className="w-[20rem] text-gray-700 h-[3.6rem] " />
					<InputField
						type="tel"
						label="Salary and Benefits"
						className="max-w-full "
					/>
				</div>
			</div>
		</section>
	);
};

export default BasicDetailsSection;
