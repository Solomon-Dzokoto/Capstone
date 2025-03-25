import RoleDetailsCard from "./RoleDetailsCard";
import RolePermissionsCard from "./RolePermissionCard";
import { ArrowLeft, Edit, Details } from "@global/Icons";
import Button from "@components/ui/Button";

const RolePage = () => {
  return (
    <section className="w-[93%]">
      <div className="relative pt-8 pb-14 w-full space-y-4 ">
        <div className="flex items-center gap-2">
          <ArrowLeft className="text-subText " />
          <h2 className="relative font-normal text-subText text-base   whitespace-nowrap">
            Roles
          </h2>
        </div>

        <div className="flex items-center justify-between ">
          <div className=" font-semibold text-gray-900 text-2xl tracking-[0] leading-7">
            Solution Sales Specialist
          </div>
          <Button className="pb-4 py-2.5" variant="ghost">
            <Edit />
            Sales specialist
            <Details />
          </Button>
        </div>
      </div>

      <div className="flex">
        <RoleDetailsCard />
        <RolePermissionsCard />
      </div>
    </section>
  );
};

export default RolePage;
