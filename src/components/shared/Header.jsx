import Input from "@components/ui/Input.jsx";
import { Search, Setting, Bell } from "@global/icons.jsx";

const Header = () => {
  return (
    <header className="flex border-b border-b-border px-4 mx-auto  items-center justify-between py-3">
      <Input placeholder="Search for anything here">
        <Search />
      </Input>
      <div className="flex items-center  gap-4">
        <Setting />
        <Bell />
        <img
          className="size-8 rounded-full"
          src="/assets/profile.jpeg"
          alt="profile pic"
        />
      </div>
    </header>
  );
};

export default Header;
