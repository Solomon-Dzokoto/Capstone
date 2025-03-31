import Button from "@components/ui/Button";
import DashboardSideComp from "./DashboardSideComp";
import Inbox from "./Inbox";
import DashboardTableField from "./DashboardTableField";

const DashboardPage = () => {
	return (
		<main className="p-4 md:p-6">
			<div className="mb-6">
				<h1 className="text-xl md:text-2xl font-bold mb-2">Hello Omah</h1>
				<p className="text-sm text-subText">Let's be productive today</p>
			</div>

			<div className="flex flex-col lg:flex-row gap-6">
				<div className="flex-1 min-w-0">
					<article className="bg-white border border-border rounded-lg p-4 md:p-6 mb-6">
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
							<div className="w-14 h-14 rounded-full bg-[#EEF5FF] shrink-0"></div>
							<div className="flex-1">
								<h3 className="text-lg font-medium mb-2">
									Keep in sync with your accounting system
								</h3>
								<p className="text-sm text-subText mb-4 sm:mb-0">
									Now! you can customize your journal voucher the way you want
									and get it ready to import to your accounting system
								</p>
							</div>
							<Button
								className="w-full sm:w-auto whitespace-nowrap"
								variant="primary"
							>
								Let's get started
							</Button>
						</div>
					</article>

					<div className="space-y-6">
						<Inbox />
						<DashboardTableField />
					</div>
				</div>

				<div className="w-full lg:w-[346px]">
					<DashboardSideComp />
				</div>
			</div>
		</main>
	);
};

export default DashboardPage;
