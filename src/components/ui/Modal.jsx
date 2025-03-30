import React, { useEffect, useRef, useState } from "react";
import {
  AddToTeam,
  Close,
  Details,
  ModalIcon,
  Search,
} from "../../global/Icons";
import Input from "./Input";
import Button from "./Button";
import { useModal } from "../../store/useModal";
import Badge from "./Badge";

const data = [
  { id: 2, name: "Software Engineer" },
  { id: 3, name: "Data Scientist" },
  { id: 4, name: "Product Manager" },
  { id: 5, name: "UX/UI Designer" },
  { id: 6, name: "DevOps Engineer" },
  { id: 7, name: "Quality Assurance" },
];

const Modal = () => {
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState([]);
  const [addedRoles, setAddedRoles] = useState([]);
  //   const divRef = useRef(null);

  const updateModal = useModal((state) => state.updateModal);

  useEffect(() => {
    const filteredRoles = data.filter((role) =>
      role.name.toLowerCase().includes(search.toLowerCase())
    );
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
    setAddedRoles((prev) => {
      if (!prev.includes(name)) {
        return [...prev, name];
      }
      return prev;
    });
    setSearch("");
  };

  const removeBadge = (name) => {
    setAddedRoles((prevRoles) => prevRoles.filter((role) => role !== name));
  };
  return (
    <div className=" fixed inset-0 grid place-content-center backdrop-blur-sm bg-black/60 ">
      <div
        // ref={divRef}
        className="px-10  py-6 rounded-2xl relative  space-y-8 bg-white w-full md:w-[30rem] "
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            updateModal({ modalState: "close", modalType: "assign-role" });
          }}
          className="absolute -top-8 p-2 rounded-full bg-white  -right-8"
        >
          <Close />
        </button>
        <span className="bg-primary/20 inline-block py-3 px-3 rounded-full  ">
          <ModalIcon />
        </span>
        <div className=" relative ">
          <h2 className="text-xl mb-4 font-semibold ">Assign a role</h2>
          <p className="text-subText mb-4 ">Select a role to assign to </p>
          <div className=" relative border border-border p-2 rounded-2xl ">
            <div className="justify-between text-gray flex items-center">
              <Search className="text-gray-500" />
              <div className="text-gray-700  flex-1">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="placeholder:text-gray-500 "
                  placeHolder="Select from existing roles"
                />
              </div>
              <Details className="text-gray-500" />
            </div>
            <div className="flex gap-1 flex-wrap">
              {addedRoles &&
                addedRoles?.map((name) => (
                  <Badge
                    key={name}
                    name={name}
                    onClick={() => removeBadge(name)}
                  />
                ))}
            </div>
          </div>
          <ul className=" absolute px-3 py-1 z-30 rounded-xl bg-white border-border w-full ">
            {search.trim() !== "" &&
              roles &&
              roles.map((role) => (
                <li
                  onClick={() => addBadges(role?.name)}
                  className="p-1 text-xs text-subText cursor-pointer hover:bg-border/50 "
                  key={role.id}
                >
                  {role?.name}
                </li>
              ))}
          </ul>
          <Button
            variant="ghost"
            asChild
            className="bg-white w-fit text-gray-600 rounded-[2rem] border-border border  py-2 px-4  mt-4"
          >
            <span>
              <AddToTeam />
              Create new role
              <Details />
            </span>
          </Button>
          <Button className=" w-full py-2 mt-12">Assign</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
