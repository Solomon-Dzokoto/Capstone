import RoleDetailsCard from "./RoleDetailsCard";
import RolePermissionsCard from "./RolePermissionCard";
import { ArrowLeft, EditUser, Details } from "@global/Icons";
// import Button from "@components/ui/Button";
import image from "/assets/pp1.png";
import { useParams } from "react-router-dom";
import { getARole } from "@api/roles";
import { useQuery } from "@tanstack/react-query";

const RolePage = () => {
	const { id } = useParams();

	console.log("Params", id);
	const { data: role } = useQuery({
		queryKey: ["roles", id],
		queryFn: async () => {
			const data = await getARole(id);
			return data;
		},
		staleTime: 1000 * 60 * 5,
		cacheTime: 1000 * 60 * 10,
		// enabled: !id,
	});

	console.log("Individual role", role);

	return (
		<section className="w-auto px-4 py-8 mt-2 border border-border dark:border-dark-border rounded-2xl space-y-8 min-w-[93%] sm:space-y-10 lg:space-y-12 bg-white dark:bg-dark-surface">
			<button
				onClick={() => window.history.back()}
				className="flex items-center gap-2 text-subText dark:text-dark-subText mb-4 hover:text-primary dark:hover:text-dark-primary transition-colors"
			>
				<ArrowLeft className="w-4 h-4" />
				Roles
			</button>
			<div className="flex p-6 sm:p-8 lg:p-10 border-b items-center border-b-border dark:border-dark-border justify-between">
				<div className="">
					<h2 className="text-lg sm:text-xl lg:text-2xl mb-1 font-semibold text-dark dark:text-dark-text">
						Review Role Information
					</h2>
					<p className="text-subText dark:text-dark-subText text-sm sm:text-base lg:text-lg">
						Do a final check to make sure there are no mistakes
					</p>
				</div>
				<div className="flex gap-2 sm:gap-3 lg:gap-4">
					<div className="relative">
						<span className="absolute flex items-center justify-center bg-black/30 inset-0 rounded-full">
							<EditUser className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
						</span>
						<img className="size-10 sm:size-12 lg:size-14" src={image} alt="" />
					</div>
					<div className="">
						<h4 className="text-sm sm:text-base lg:text-lg text-dark dark:text-dark-text">
							James Campion
						</h4>
						<p className="text-sm sm:text-base lg:text-lg text-subText dark:text-dark-subText">
							Reporting manager
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 lg:gap-8">
				<RoleDetailsCard role={role} />
				<RolePermissionsCard />
			</div>
		</section>
	);
};

export default RolePage;
