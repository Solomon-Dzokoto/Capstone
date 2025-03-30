"use client";
import React, { useState } from "react";
import Badge from "./Badge";
import { Details, Search } from "../../../global/Icons";
import Input from "../../ui/Input";

const TeamSection = () => {
  const [isTyping, setIsTyping] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Jennifer Lopez",
      image: "",
    },
    {
      id: 2,
      name: "Tassy Omah",
      image: "",
    },
    {
      id: 3,
      name: "Jane Mena",
      image: "",
    },
    {
      id: 4,
      name: "Emeto Winnder",
      image: "",
    },
    {
      id: 5,
      name: "Kate Magnamay",
      image: "",
    },
  ];

  const onChange = (e) => {
    if (e.target) {
      setIsTyping(true);
    }
  };
  return (
    <section className="flex flex-col px-8 pt-8 pb-4 w-auto min-w-[700px] bg-white rounded-xl border border-solid border-[#C2C7D0] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-wrap gap-5 justify-between w-full text-base font-medium leading-none text-blue-950 max-md:max-w-full">
        <h3 className="gap-2 self-stretch">Add Teams</h3>
        <Details />
      </header>
      <div className="flex flex-col justify-center items-start px-4 py-2.5 mt-4 w-full text-sm tracking-normal leading-loose text-gray-400 bg-white rounded border border-solid opacity-80 border-[#E6E7EC] max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-1.5 justify-center items-center">
          <Search />
          {!isTyping && (
            <label className="self-stretch  my-auto">
              Search existing teams and press{" "}
              <span className="font-medium text-[#676E7E]">Enter</span> to add
              them
            </label>
          )}
          <Input onChange={onChange} className="" />
        </div>
      </div>

      {/* <div className="flex z-10 flex-col justify-center self-start mt-5 text-sm font-medium leading-none text-center text-sky-950 max-md:max-w-full">
        <div className="flex flex-wrap gap-2 items-start max-md:max-w-full">
          {teamMembers.map((member) => (
            <Badge
              key={member.id}
              image={member.image}
              name={member.name}
              onRemove={() => {}}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default TeamSection;
