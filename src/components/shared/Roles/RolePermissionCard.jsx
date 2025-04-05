import ToggleSwitch from "@components/ui/ToggleSwitch";
import { Details, ProfileAvatar } from "@global/Icons";
import Skeleton from "../../ui/Skeleton";
import { EditPen } from "../../../global/Icons";
import { useQuery } from "@tanstack/react-query";
import { getPermissions } from "@api/permission";
import { useState, useEffect } from "react";

const RolePermissionCard = () => {
  const { data: permission, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      const data = await getPermissions();
      return data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  const [perm, setPerm] = useState([]);

  useEffect(() => {
    if (permission) {
      setPerm(permission.map((item) => !item?.id));
    }
  }, [permission]);

  console.log("Permissions data:", permission);
  console.log("Permissions Id", perm);

  const togglePermissions = (passId) => {
    setPerm((prev) => {
      if (prev.includes(passId)) {
        return prev.filter((id) => id !== passId);
      } else {
        return [...prev, passId];
      }
    });
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-white dark:bg-dark-surface rounded-xl border border-border dark:border-dark-border p-4 md:p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-6">
          <ProfileAvatar className="w-8 h-8 text-subText dark:text-dark-subText" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-dark dark:text-dark-text">
              Manager
            </h3>
            <p className="text-sm text-subText dark:text-dark-subText">
              Set permissions for managers
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-dark dark:text-dark-text">
              Role permissions
            </h2>
            <EditPen className="w-5 h-5 text-subText dark:text-dark-subText" />
          </div>

          <hr className="border-border dark:border-dark-border" />

          <div className="space-y-6">
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="w-full h-10 rounded-md" />
                ))
              : permission?.map((item) => (
                  <ToggleSwitch
                    enabled={perm?.includes(item?.id)}
                    key={item?.id}
                    loading={isLoading}
                    onToggle={() => togglePermissions(item?.id)}
                    title={item?.name}
                    description={item?.description}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePermissionCard;
