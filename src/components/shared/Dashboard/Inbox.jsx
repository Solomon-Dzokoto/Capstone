import { Search } from "@/global/Icons";

const Inbox = () => {
	return (
		<main className="w-full bg-white min-h-[screen]">
			<div className="relative px-2.5 mx-auto w-full max-w-[52.9rem]">
				{/* Header section */}
				<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 sm:pt-5 gap-4 sm:gap-0">
					<h1 className="gap-1 text-base font-bold text-black">Inbox</h1>
					<div className="flex gap-3 items-center w-full sm:w-auto">
						<div className="flex gap-2 items-center px-2.5 sm:px-3.5 py-2 sm:py-2.5 w-full bg-white rounded-lg border shadow-sm border-zinc-100">
							<Search />
							<input
								id="search-input"
								type="search"
								placeholder="Search by name, ID or Iqama"
								className="text-sm text-neutral-600 bg-transparent border-none outline-none w-full"
							/>
						</div>
					</div>
				</header>

				{/* Navigation tabs */}
				<nav
					className="mt-4 sm:mt-5 border-b border-zinc-100"
					aria-label="Main navigation"
				>
					<ul className="flex gap-2 sm:gap-4 overflow-x-auto list-none m-0 p-0">
						<li className="flex flex-col items-center">
							<button
								className="flex gap-1.5 sm:gap-2 items-center p-2 sm:p-3"
								aria-current="page"
							>
								<span className="text-sm font-semibold text-amber-800 whitespace-nowrap">
									Requests
								</span>
								<span className="flex items-center">
									<span className="px-1.5 sm:px-2 py-0.5 text-xs font-medium text-amber-800 bg-blue-50 rounded-2xl">
										0
									</span>
								</span>
							</button>
							<div
								className="w-full h-[0.031rem] bg-amber-800"
								aria-hidden="true"
							/>
						</li>
						<li className="flex flex-col items-center">
							<button className="flex gap-1.5 sm:gap-2 items-center p-2 sm:p-3">
								<span className="text-sm font-medium text-zinc-500 whitespace-nowrap">
									Profile
								</span>
								<span className="flex items-center">
									<span className="px-1.5 sm:px-2 py-0.5 text-xs font-medium bg-gray-100 rounded-2xl text-slate-700">
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
						className="bg-blue-50 h-[3rem] sm:h-[3.75rem] rounded-[4.3rem] w-[3rem] sm:w-[3.75rem]"
						aria-hidden="true"
					/>
					<h2 className="mt-2 sm:mt-2.5 text-base sm:text-lg font-medium leading-6 sm:leading-7 text-center text-gray-900">
						Keep in sync with your accounting system
					</h2>
					<p className="text-sm leading-5 text-center max-w-full sm:max-w-[31.8rem] text-zinc-500">
						Now! you can customize your journal voucher the way you want and get
						it ready to import to your accounting system
					</p>
				</section>
			</div>
		</main>
	);
};

export default Inbox;

{
	/**import React from "react";
import { ProfileAvatar, ArrowLeft } from "@global/Icons";
import Button from "@components/ui/Button";

const messages = [
  {
    id: 1,
    name: "James Muriel",
    message: "Hello, I need help with something",
    time: "2 mins ago",
  },
  {
    id: 2,
    name: "Emeto Winner",
    message: "Can you check this out?",
    time: "5 mins ago",
  },
];

const Inbox = () => {
  return (
    <div className="bg-white p-4 rounded-xl border border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Inbox</h3>
        <Button variant="raw" className="text-xs">
          View all
          <ArrowLeft className="rotate-180 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-center gap-3 p-2">
            <ProfileAvatar className="w-8 h-8" />
            <div className="flex-1">
              <p className="font-medium text-sm">{message.name}</p>
              <p className="text-subText text-xs">{message.message}</p>
            </div>
            <span className="text-xs text-subText">{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
 */
}
