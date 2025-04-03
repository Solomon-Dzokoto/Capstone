import Button from "@components/ui/Button";
import { Dropdown } from "@/global/Icons";
import { useState } from "react";
import { cn } from "../../libs/cn";
// import { getFirstLetters } from "../../store/useUserDetails";

const Table = ({
	columns,
	data,
	className = "",
	isCheck = true,
	actions = [],
}) => {
	const [activeSelect, setActiveSelect] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedRows, setSelectedRows] = useState([]);

	const selectAll = () => {
		if (selectedRows.length !== data?.length) {
			setSelectedRows(data.map((item) => item.id));
		} else {
			setSelectedRows([]);
		}
	};

	const onRowClick = (id) => {
		setSelectedRows((prev) => {
			if (prev.includes(id)) {
				return prev.filter((item) => item !== id);
			}
			return [...prev, id];
		});
	};

	const renderCell = (column, item) => {
		if (column.render) {
			return column.render(item);
		}

		const value = item[column.field];

		if (column.type === "status") {
			return (
				<Button
					variant={
						value?.toLowerCase() === "active"
							? "active"
							: value?.toLowerCase() === "rejected"
							? "inactive"
							: value?.toLowerCase() === "pending"
							? "pending"
							: value?.toLowerCase()
					}
					className="min-w-[100px] "
				>
					<div className="w-1.5 h-1.5 rounded-full bg-current" />
					<span className="text-xs ">{value}</span>
				</Button>
			);
		}

		if (column.type === "tags") {
			return (
				<div className="flex flex-wrap gap-2">
					{(value || []).map((tag) => (
						<Button
							key={tag}
							variant={tag === "Design" ? "design" : "outline"}
							className="text-xs whitespace-nowrap py-1"
						>
							{tag}
						</Button>
					))}
				</div>
			);
		}

		return value;
	};

	return (
		<div
			className={cn(
				"w-full bg-white dark:bg-dark-surface rounded-lg overflow-hidden",
				className
			)}
		>
			<div className="w-full overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="border-b border-border dark:border-dark-border">
							{isCheck && (
								<th className="pl-4 pr-2 py-3">
									<input
										type="checkbox"
										checked={selectedRows.length === data?.length}
										onChange={selectAll}
										className="accent-primary dark:accent-dark-primary"
									/>
								</th>
							)}
							{columns.map((column) => (
								<th
									key={column.field}
									className="px-3 py-3 text-left text-xs font-medium text-subText dark:text-dark-subtext"
								>
									{column.title}
								</th>
							))}
							{actions.length > 0 && <th className="w-10"></th>}
						</tr>
					</thead>
					<tbody>
						{data?.map((item) => (
							<tr
								key={item.id}
								className="border-b border-border dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-hover"
							>
								{isCheck && (
									<td className="pl-4 pr-2 py-3">
										<input
											type="checkbox"
											checked={selectedRows.includes(item.id)}
											onChange={() => onRowClick(item.id)}
											className="accent-primary dark:accent-dark-primary"
										/>
									</td>
								)}
								{columns.map((column) => (
									<td
										key={column.field}
										className="px-3 whitespace-nowrap py-3 text-sm dark:text-dark-text"
									>
										{renderCell(column, item)}
									</td>
								))}
								{actions.length > 0 && (
									<td
										className="relative cursor-pointer"
										onClick={() => {
											setActiveSelect(item.id);
											setIsOpen((prev) => activeSelect !== item.id || !prev);
										}}
									>
										<Dropdown className="mx-2 dark:text-dark-text" />
										{activeSelect === item.id && isOpen && (
											<div className="absolute top-12 right-0 w-fit rounded-md min-w-[8rem] z-10 bg-white dark:bg-dark-surface shadow-lg p-2">
												<ul>
													{actions.map((action) => (
														<li
															key={action.id}
															className="flex py-2 text-[.7rem] cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-hover dark:text-dark-text items-center px-2 rounded"
															onClick={(e) => {
																e.stopPropagation();
																action.onClick(item);
																setIsOpen(false);
															}}
														>
															{action.icon && (
																<action.icon className="w-4 h-4 text-subText dark:text-dark-subtext mr-2" />
															)}
															{action.name}
														</li>
													))}
												</ul>
											</div>
										)}
									</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
