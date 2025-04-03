const LeaveBalance = () => {
	return (
		<div className="bg-white dark:bg-dark-surface p-4 md:p-6 rounded-xl border border-border dark:border-dark-border">
			<h2 className="mb-6 text-base font-bold text-dark dark:text-dark-text">
				Leave Balance
			</h2>

			<div className="relative flex flex-col gap-4 p-4 rounded-md shadow-sm dark:shadow-dark-sm">
				<h3 className="text-sm text-dark dark:text-dark-text">
					Annual Balance
				</h3>
				<p className="text-xl font-bold text-dark dark:text-dark-text">
					70 days
				</p>
				<button className="w-full sm:w-auto px-4 py-2.5 text-sm bg-white dark:bg-dark-surface rounded-lg border border-gray-300 dark:border-dark-border text-dark dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors">
					Request leave
				</button>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
				<div className="p-4 rounded-md bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border">
					<h3 className="mb-4 text-xs text-dark dark:text-dark-text">
						Available to use
					</h3>
					<p className="text-xl font-bold text-dark dark:text-dark-text">
						70 days
					</p>
				</div>
				<div className="p-4 rounded-md bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border">
					<h3 className="mb-4 text-xs text-dark dark:text-dark-text">Used</h3>
					<p className="text-xl font-bold text-dark dark:text-dark-text">
						0 days
					</p>
				</div>
			</div>
		</div>
	);
};

export default LeaveBalance;
