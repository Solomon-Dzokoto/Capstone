import Button from "@components/ui/Button";

const Table = ({ headList, dataList }) => {
	const getFirstLetters = (name) => {
		return name
			.split(" ")
			.map((letters) => letters[0])
			.join("");
	};

	return (
		<div className="w-full mt-4 overflow-x-auto rounded-lg shadow-sm border border-gray-200">
			<table className="w-full min-w-[800px] border-collapse">
				<thead>
					<tr className="bg-[#FAFBFB] border-b border-gray-200">
						<th className="w-[40px] px-4 py-3 text-left whitespace-nowrap tracking-wider text-[.85rem] font-[500]">
							<input type="checkbox" className="rounded" />
						</th>

						{headList.map((list) => (
							<th
								className="px-4 py-3 text-left whitespace-nowrap tracking-wider text-[.85rem] font-[500] text-gray-700"
								key={list}
							>
								{list}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{dataList.map((list) => (
						<tr
							key={list.id}
							className="border-b  border-gray-100 hover:bg-gray-50 transition-colors"
						>
							<td className="w-[40px] px-4 py-3">
								<input type="checkbox" className="rounded" />
							</td>
							<td className="px-4 py-3">
								<div className="flex items-center gap-3">
									{list?.image ? (
										<img
											className="rounded-full w-8 h-8 object-cover"
											src={list.image}
											alt={list?.name}
										/>
									) : (
										<div className="rounded-full w-8 h-8 flex items-center justify-center text-[.85rem] text-brown font-700 bg-[#FFF2EA]">
											{getFirstLetters(list?.name)}
										</div>
									)}
									<div>
										<p className="text-gray-900 text-[.9rem] font-medium">
											{list?.name}
										</p>
										<p className="text-gray-500 text-[.85rem]">{list?.email}</p>
									</div>
								</div>
							</td>
							<td className="px-4 py-3 text-[.85rem] text-gray-700">
								{list?.employeeId}
							</td>
							<td className="px-4 py-3">
								<div>
									<p className="text-[.85rem] text-gray-900 font-medium">
										{list?.role}
									</p>
									<p className="text-[.8rem] text-gray-500">{list?.workType}</p>
								</div>
							</td>
							<td className="px-4 py-3">
								<Button
									variant={list?.status?.toLowerCase()}
									className="min-w-[100px]"
								>
									<div className="w-1.5 h-1.5 rounded-full bg-current" />
									<span className="text-[.85rem]">{list?.status}</span>
								</Button>
							</td>
							<td className="px-4 py-3">
								<div className="flex flex-wrap gap-2">
									{list?.teams?.map((item) => (
										<Button
											key={item}
											variant="outline"
											className="text-[.8rem] py-1"
										>
											{item}
										</Button>
									))}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
