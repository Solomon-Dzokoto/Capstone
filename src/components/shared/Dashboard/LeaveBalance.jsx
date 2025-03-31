const LeaveBalance = () => {
	return (
		<div className="bg-white p-4 md:p-6 rounded-xl border border-border">
			<h2 className="mb-6 text-base font-bold text-dark">Leave Balance</h2>

			<div className="relative flex flex-col gap-4 p-4 rounded-md shadow-sm">
				<h3 className="text-sm text-dark">Annual Balance</h3>
				<p className="text-xl font-bold text-dark">70 days</p>
				<button className="w-full sm:w-auto px-4 py-2.5 text-sm bg-white rounded-lg border border-gray-300 text-dark hover:bg-gray-50 transition-colors">
					Request leave
				</button>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
				<div className="p-4 rounded-md bg-gray-50 border border-gray-200">
					<h3 className="mb-4 text-xs text-dark">Available to use</h3>
					<p className="text-xl font-bold text-dark">70 days</p>
				</div>
				<div className="p-4 rounded-md bg-gray-50 border border-gray-200">
					<h3 className="mb-4 text-xs text-dark">Used</h3>
					<p className="text-xl font-bold text-dark">0 days</p>
				</div>
			</div>
		</div>
	);
};

export default LeaveBalance;
