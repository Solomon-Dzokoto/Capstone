import React, { useState } from "react";
import { Details, Edit } from "@/global/Icons";
import Button from "@components/ui/Button";
import { InputWithLabel } from "@components/ui/Input";
import ToggleSwitch from "@components/ui/ToggleSwitch";

const settingsCategories = [
	{ id: "general", name: "General Settings" },
	{ id: "company", name: "Company Profile" },
	{ id: "notifications", name: "Notifications" },
	{ id: "security", name: "Security" },
	{ id: "integrations", name: "Integrations" },
];

const SettingsPage = () => {
	const [active, setActive] = useState("general");
	const [settings, setSettings] = useState({
		emailNotifications: true,
		slackIntegration: false,
		twoFactorAuth: true,
		autoPayroll: false,
	});

	const toggleSetting = (key) => {
		setSettings((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const renderSettingsContent = () => {
		switch (active) {
			case "general":
				return (
					<div className="space-y-6">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="text-lg font-semibold text-dark">
									System Preferences
								</h3>
								<p className="text-sm text-subText">
									Customize your system preferences
								</p>
							</div>
							<Button variant="ghost" size="sm">
								<Edit className="text-subText" />
								Edit
							</Button>
						</div>

						<div className="space-y-4">
							<ToggleSwitch
								enabled={settings.autoPayroll}
								onToggle={() => toggleSetting("autoPayroll")}
								title="Automatic Payroll Processing"
								description="Automatically process payroll on scheduled dates"
							/>
							<ToggleSwitch
								enabled={settings.emailNotifications}
								onToggle={() => toggleSetting("emailNotifications")}
								title="Email Notifications"
								description="Receive email notifications for important updates"
							/>
						</div>
					</div>
				);

			case "company":
				return (
					<div className="space-y-6">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="text-lg font-semibold text-dark">
									Company Information
								</h3>
								<p className="text-sm text-subText">
									Update your company details
								</p>
							</div>
							<Button variant="ghost" size="sm">
								<Edit className="text-subText" />
								Edit
							</Button>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<InputWithLabel
								label="Company Name"
								placeholder="Enter company name"
								defaultValue="Afrima HR"
							/>
							<InputWithLabel
								label="Industry"
								placeholder="Select industry"
								defaultValue="Technology"
							/>
							<InputWithLabel
								label="Company Size"
								placeholder="Number of employees"
								defaultValue="50-100"
							/>
							<InputWithLabel
								label="Company Address"
								placeholder="Enter company address"
								defaultValue="123 Business Street"
							/>
						</div>
					</div>
				);

			case "security":
				return (
					<div className="space-y-6">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="text-lg font-semibold text-dark">
									Security Settings
								</h3>
								<p className="text-sm text-subText">
									Manage security preferences
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<ToggleSwitch
								enabled={settings.twoFactorAuth}
								onToggle={() => toggleSetting("twoFactorAuth")}
								title="Two-Factor Authentication"
								description="Add an extra layer of security to your account"
							/>
							<Button variant="outline" className="mt-4">
								Change Password
							</Button>
						</div>
					</div>
				);

			case "integrations":
				return (
					<div className="space-y-6">
						<div className="flex justify-between items-center">
							<div>
								<h3 className="text-lg font-semibold text-dark">
									External Integrations
								</h3>
								<p className="text-sm text-subText">
									Connect with other services
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<ToggleSwitch
								enabled={settings.slackIntegration}
								onToggle={() => toggleSetting("slackIntegration")}
								title="Slack Integration"
								description="Connect with Slack for notifications"
							/>
						</div>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<main className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="font-bold font-[Space] text-[1.5rem] leading-6">
					Settings
				</h2>
			</div>

			<div className="flex gap-8">
				<aside className="w-64 shrink-0">
					<ul className="space-y-2">
						{settingsCategories.map((category) => (
							<li
								key={category.id}
								onClick={() => setActive(category.id)}
								className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
									active === category.id
										? "bg-primary/10 text-primary"
										: "text-subText hover:bg-gray-50"
								}`}
							>
								{category.name}
							</li>
						))}
					</ul>
				</aside>

				<div className="flex-1 bg-white rounded-xl border border-border p-6">
					{renderSettingsContent()}
				</div>
			</div>
		</main>
	);
};

export default SettingsPage;
