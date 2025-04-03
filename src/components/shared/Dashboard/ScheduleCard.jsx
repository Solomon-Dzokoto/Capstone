import { More } from "@global/Icons";

const ScheduleCard = () => {
	return (
		<div className="bg-white dark:bg-dark-surface p-4 md:p-6 rounded-lg border border-border dark:border-dark-border hover:shadow-sm transition-shadow">
			<header className="flex justify-between items-center mb-4">
				<time className="text-xs text-subText dark:text-dark-subText">
					Tomorrow
				</time>
				<button
					className="p-1 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-full transition-colors"
					aria-label="More options"
				>
					<More className="w-4 h-4" />
				</button>
			</header>

			<div className="space-y-4">
				<time className="block text-base font-bold text-dark dark:text-dark-text">
					08:00 AM - 04:00 PM
				</time>
				<div className="flex items-center gap-2">
					<div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900" />
					<span className="text-xs text-subText dark:text-dark-subText">
						HEAD OFFICE
					</span>
				</div>
			</div>
		</div>
	);
};

export default ScheduleCard;
