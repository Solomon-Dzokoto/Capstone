import { More } from "@global/Icons";

const ScheduleCard = () => {
	return (
		<div className="bg-white p-4 md:p-6 rounded-lg border border-border hover:shadow-sm transition-shadow">
			<header className="flex justify-between items-center mb-4">
				<time className="text-xs text-subText">Tomorrow</time>
				<button
					className="p-1 hover:bg-gray-100 rounded-full transition-colors"
					aria-label="More options"
				>
					<More className="w-4 h-4" />
				</button>
			</header>

			<div className="space-y-4">
				<time className="block text-base font-bold text-dark">
					08:00 AM - 04:00 PM
				</time>
				<div className="flex items-center gap-2">
					<div className="w-5 h-5 rounded-full bg-blue-50" />
					<span className="text-xs text-subText">HEAD OFFICE</span>
				</div>
			</div>
		</div>
	);
};

export default ScheduleCard;
