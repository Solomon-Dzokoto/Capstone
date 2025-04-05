import React, { useEffect, useState } from "react";
import {
  Close,
  Details,
  MarkIcon,
  ModalIcon,
  Search,
  AddPerson,
  ProfileAvatar,
} from "@global/Icons";
import Input from "./Input";
import Button from "./Button";
import { useModal } from "../../store/useModal";
import Badge from "./Badge";
// import { employees } from "../../data/list";
import { getFirstLetters } from "../../store/useUserDetails";
import { useEmployee } from "@hooks/useEmployee";

const AssignNewRoleModal = () => {
  // const name = employees.map((key) => ({ [key?.name]: false }));
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [checked, setChecked] = useState({});

  const { employees } = useEmployee();

  console.log("Employees :", employees);

  const updateModal = useModal((state) => state.updateModal);

  useEffect(() => {
    const filteredRoles = employees?.filter((user) => {
      if (!search) return true;
      return (
        user?.user?.first_name.toLowerCase().includes(search.toLowerCase()) ||
        user?.user?.last_name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setRoles(filteredRoles);
  }, [search]);

  //   useEffect(() => {
  //     const handleClickOutside = (e) => {
  //       console.log(e.target);
  //       if (divRef.current && !divRef.current.contains(e.target)) {
  //         updateModal({ modalState: "close", modalType: "assign-role" });
  //       }
  //     };
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => document.removeEventListener("mousedown", handleClickOutside);
  //   }, [updateModal]);

  const addBadges = (name) => {
    setChecked((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
    setTeamMembers((prev) => {
      if (!prev.includes(name)) {
        return [...prev, name];
      }
      return prev;
    });
    setSearch("");
  };

  const removeBadge = (name) => {
    setTeamMembers((prevRoles) => prevRoles.filter((role) => role !== name));
  };

  return (
    <div className="fixed !inset-0 grid place-content-center z-30 backdrop-blur-sm bg-black/60 dark:bg-dark-overlay">
      <button
        onClick={(e) => {
          e.stopPropagation();
          updateModal({ modalState: "close", modalType: "assign-new-role" });
        }}
        className="absolute p-2 rounded-full bg-white dark:bg-dark-surface z-40 top-16 right-[25%]"
      >
        <Close />
      </button>
      <div className="px-10 py-6 max-h-full overflow-y-auto rounded-2xl relative space-y-8 bg-white dark:bg-dark-surface w-full md:w-[30rem]">
        <span className="bg-primary/20 dark:bg-dark-primary/20 inline-block py-3 px-3 rounded-full">
          <ModalIcon />
        </span>
        <div className="relative">
          <h2 className="text-xl mb-4 font-semibold text-gray-900 dark:text-dark-text">
            Assign a role
          </h2>
          <p className="text-subText dark:text-dark-subText mb-4 items-center">
            Select one or multiple employees to assign to this role
            <span className="text-secondary dark:text-dark-secondary inline-block font-semibold">
              "Senior Design Lead"
            </span>
          </p>
          <div className="relative border border-border dark:border-dark-border p-2 rounded-2xl">
            <div className="justify-between text-gray flex items-center">
              <Search className="text-gray-500 dark:text-dark-subText" />
              <div className="text-gray-700 dark:text-dark-text flex-1">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="placeholder:text-gray-500 dark:placeholder:text-dark-subText"
                  placeHolder="Search for an individual or team"
                />
              </div>
              <Details className="text-gray-500 dark:text-dark-subText" />
            </div>
            <div className="flex gap-1 flex-wrap">
              {teamMembers &&
                teamMembers?.map((name) => (
                  <Badge
                    key={name}
                    name={name}
                    onRemove={() => removeBadge(name)}
                  />
                ))}
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto border border-border dark:border-dark-border rounded-xl bg-white dark:bg-dark-surface">
            <ul className="absolute px-3 py-1 z-30 rounded-xl bg-white dark:bg-dark-surface border-border dark:border-dark-border w-full">
              {search.trim() !== "" &&
                roles &&
                roles?.map((item) => (
                  <li
                    className={`p-4 gap-2 border border-border dark:border-dark-border rounded-md flex items-start justify-between text-xs text-subText dark:text-dark-subText cursor-pointer ${
                      checked[item?.name]
                        ? "bg-primary/30 dark:bg-dark-primary/30"
                        : ""
                    } hover:bg-border/50 dark:hover:bg-dark-border/50`}
                    key={item?.id}
                  >
                    {item?.image ? (
                      <img
                        className="rounded-full size-6"
                        src={item?.image}
                        alt={item?.user?.name}
                      />
                    ) : (
                      <span className="rounded-full size-6 text-[.6rem] flex items-center justify-center text-brown font-700 bg-[#d9e1fb] dark:bg-dark-avatar">
                        {getFirstLetters(
                          `${item?.user?.first_name || ""} ${
                            item?.user?.last_name || ""
                          }`
                        )}
                      </span>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-dark-text">
                        {item?.user?.first_name + " " + item?.user?.last_name}
                      </p>
                      <span className="text-xs text-secondary dark:text-dark-secondary">
                        {item?.role?.title}
                      </span>
                    </div>
                    <label className="relative flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checked[item?.user.first_name] || false}
                        onChange={() => addBadges(item?.user?.first_name)}
                      />
                      <div
                        className={`w-4 h-4 border-2 border-secondary dark:border-dark-secondary rounded-full flex items-center justify-center transition-all ${
                          checked[item?.name]
                            ? "bg-secondary dark:bg-dark-secondary border-secondary dark:border-dark-secondary"
                            : "bg-transparent"
                        }`}
                      >
                        {checked && <MarkIcon className="text-white" />}
                      </div>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
          <Button className="w-full py-2 mt-12 dark:bg-dark-button dark:text-dark-button-text">
            Assign
          </Button>
          <Button
            variant="ghost"
            asChild
            className="bg-white dark:bg-dark-surface w-fit text-gray-600 dark:text-dark-subText rounded-[2rem] border-border dark:border-dark-border border py-2 px-4 mt-4"
          >
            <span>
              <AddPerson />
              Create new role
              <Details />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignNewRoleModal;
