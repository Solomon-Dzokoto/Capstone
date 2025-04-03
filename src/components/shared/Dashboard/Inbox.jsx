import { Search } from "@/global/Icons";

const Inbox = () => {
	return (
		<main className="w-full bg-white dark:bg-dark-surface min-h-[screen]">
			<div className="relative px-2.5 mx-auto w-full max-w-[52.9rem]">
				{/* Header section */}
				<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 sm:pt-5 gap-4 sm:gap-0">
					<h1 className="gap-1 text-base font-bold text-black dark:text-dark-text">
						Inbox
					</h1>
					<div className="flex gap-3 items-center w-full sm:w-auto">
						<div className="flex gap-2 items-center px-2.5 sm:px-3.5 py-2 sm:py-2.5 w-full bg-white dark:bg-dark-surface rounded-lg border shadow-sm border-zinc-100 dark:border-dark-border">
							<Search className="text-zinc-500 dark:text-dark-subText" />
							<input
								id="search-input"
								type="search"
								placeholder="Search by name, ID or Iqama"
								className="text-sm text-neutral-600 dark:text-dark-text bg-transparent border-none outline-none w-full placeholder:text-zinc-500 dark:placeholder:text-dark-subText"
							/>
						</div>
					</div>
				</header>

				{/* Navigation tabs */}
				<nav
					className="mt-4 sm:mt-5 border-b border-zinc-100 dark:border-dark-border"
					aria-label="Main navigation"
				>
					<ul className="flex gap-2 sm:gap-4 overflow-x-auto list-none m-0 p-0">
						<li className="flex flex-col items-center">
							<button
								className="flex gap-1.5 sm:gap-2 items-center p-2 sm:p-3"
								aria-current="page"
							>
								<span className="text-sm font-semibold text-amber-800 dark:text-amber-400 whitespace-nowrap">
									Requests
								</span>
								<span className="flex items-center">
									<span className="px-1.5 sm:px-2 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-400 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
										0
									</span>
								</span>
							</button>
							<div
								className="w-full h-[0.031rem] bg-amber-800 dark:bg-amber-400"
								aria-hidden="true"
							/>
						</li>
						<li className="flex flex-col items-center">
							<button className="flex gap-1.5 sm:gap-2 items-center p-2 sm:p-3">
								<span className="text-sm font-medium text-zinc-500 dark:text-dark-subText whitespace-nowrap">
									Profile
								</span>
								<span className="flex items-center">
									<span className="px-1.5 sm:px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-dark-hover rounded-2xl text-slate-700 dark:text-dark-text">
										2
									</span>
								</span>
							</button>
							<div className="w-full h-[0.031rem]" aria-hidden="true" />
						</li>
					</ul>
				</nav>

				{/* Empty state section */}
				<section
					className="flex flex-col gap-2.5 items-center mt-16 sm:mt-24 px-4 sm:px-0"
					aria-label="Empty state"
				>
					<figure
						className="bg-blue-50 dark:bg-blue-900/30 h-[3rem] sm:h-[3.75rem] rounded-[4.3rem] w-[3rem] sm:w-[3.75rem]"
						aria-hidden="true"
					/>
					<h2 className="mt-2 sm:mt-2.5 text-base sm:text-lg font-medium leading-6 sm:leading-7 text-center text-gray-900 dark:text-dark-text">
						Keep in sync with your accounting system
					</h2>
					<p className="text-sm leading-5 text-center max-w-full sm:max-w-[31.8rem] text-zinc-500 dark:text-dark-subText">
						Now! you can customize your journal voucher the way you want and get
						it ready to import to your accounting system
					</p>
				</section>
			</div>
		</main>
	);
};

export default Inbox;
