import RoleDetailsCard from "./RoleDetailsCard";
import RolePermissionsCard from "./RolePermissionCard";
import { ArrowLeft, EditUser, Details } from "@global/Icons";
import Button from "@components/ui/Button";
import image from "/assets/pp1.png";

const RolePage = () => {
  return (
    <section className="w-auto mt-6 border border-border rounded-2xl space-y-8 min-w-[93%] ">
      {/* <div className="relative pt-8 pb-14 w-full space-y-4 ">
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
      </div> */}
      <div className="flex p-6 border-b items-center border-b-border justify-between">
        <div className="">
          <h2 className="text-lg mb-1 font-semibold">
            Review Role Information
          </h2>
          <p className="text-subText ">
            Do a final check to make sure there are no mistakes{" "}
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <span className="absolute flex items-center justify-center bg-black/30 inset-0 rounded-full ">
              <EditUser />
            </span>
            <img className="size-10" src={image} alt="" />
          </div>
          <div className="">
            <h4 className="text-sm">James Campion</h4>
            <p className="text-sm  text-subText ">Reporting manager</p>
          </div>
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
