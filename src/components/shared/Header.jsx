import { Search, ToggleIcon, Menu, Setting } from "@global/Icons";
import Input from "../ui/Input";
import { Link } from "react-router-dom";
import useUser from "../../store/useUser";

const Header = ({ onMenuClick }) => {
  const user = useUser((state) => state.user);
  return (
    <header className="h-[72px] px-6 flex items-center justify-between border-b border-border dark:border-dark-border bg-white dark:bg-dark-bg">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 hidden md:block dark:hover:bg-dark-hover rounded-lg"
        >
          <ToggleIcon className="dark:text-gray-400" />
        </button>
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-400 md:hidden dark:hover:bg-dark-hover rounded-lg"
        >
          <Menu />
        </button>
        <div className="hidden md:block">
          <Input
            className="w-[20rem] dark:bg-dark-bg placeholder:text-[#333333] text-[#333333]"
            placeholder="Search for anything..."
          >
            <Search />
          </Input>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-lg">
          <Link to="/setting">
            <Setting />
          </Link>
        </button>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <p className="text-dark font-medium text-sm">
              {user?.first_name + " " + user?.last_name || "Your Name"}
            </p>
            <p className="text-subText text-xs">Employee</p>
          </div>
          <img
            src="/assets/profile.jpeg"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
