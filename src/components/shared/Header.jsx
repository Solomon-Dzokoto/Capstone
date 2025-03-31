import { Search, ToggleIcon } from "@global/Icons";
import Input from "../ui/Input";
// import { useUserDetail } from "../../store/useUserDetails";

const Header = ({ onMenuClick }) => {
	// const user = useUserDetail((state) => state?.user);

	return (
		<header className="flex items-center justify-between w-auto  px-4 md:px-6 py-4 bg-white border-b border-border h-[68px]">
			<div className="flex items-center gap-4">
				<button
					onClick={onMenuClick}
					className="p-2 hidden md:block hover:bg-gray-100 rounded-lg"
				>
					<ToggleIcon className="size-4" />
				</button>
				<div className="hidden md:block">
					<Input
						className="w-[20rem] placeholder:text-[#333333] text-[#333333]"
						placeholder="Search for anything..."
					>
						<Search />
					</Input>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<div className="flex flex-col items-end">
					<p className="text-dark font-medium text-sm">James Campion</p>
					<p className="text-subText text-xs">Admin</p>
				</div>
				<img
					src="/assets/profile.jpeg"
					alt="profile"
					className="w-10 h-10 rounded-full object-cover"
				/>
			</div>
		</header>
	);
};

export default Header;
