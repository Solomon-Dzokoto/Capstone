"use client";
import React, { useState, useEffect } from "react";
import Badge from "./Badge";
import { Details, Search } from "../../../global/Icons";
import Input from "../../ui/Input";
import Skeleton from "../../ui/Skeleton";

const TeamSection = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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

  const SkeletonBadge = () => (
    <div className="h-8 w-32 bg-gray-200 dark:bg-dark-surface rounded-full animate-pulse" />
  );

  if (isLoading) {
    return (
      <section className="w-full bg-white dark:bg-dark-surface text-dark dark:text-light rounded-xl border border-solid border-[#C2C7D0] dark:border-dark-border p-4 md:p-6">
        <header className="flex items-center justify-between w-full">
          <div className="h-6 w-24 bg-gray-200 dark:bg-dark-surface rounded animate-pulse" />
          <div className="h-6 w-6 bg-gray-200 dark:bg-dark-surface rounded animate-pulse" />
        </header>

        <div className="mt-4 p-3 w-full bg-gray-100 dark:bg-dark-surface rounded border border-solid border-[#E6E7EC] dark:border-dark-border">
          <div className="h-10 bg-gray-200 dark:bg-dark-surface rounded animate-pulse" />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <SkeletonBadge key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white dark:bg-dark-surface text-dark dark:text-light rounded-xl border border-solid border-[#C2C7D0] dark:border-dark-border p-4 md:p-6">
      <header className="flex items-center justify-between w-full">
        <h3 className="text-base font-medium text-blue-950 dark:text-dark-text">
          Add Teams
        </h3>
        <Details className="dark:text-dark-subText" />
      </header>

      <div className="mt-4 p-3 w-full text-sm text-gray-400 dark:text-dark-subText bg-white dark:bg-dark-surface rounded border border-solid opacity-80 border-[#E6E7EC] dark:border-dark-border">
        <div className="flex flex-wrap gap-2 items-center">
          <Search className="dark:text-dark-subText shrink-0" />
          {!isTyping && (
            <label className="text-sm whitespace-normal">
              Search existing teams and press{" "}
              <span className="font-medium text-[#676E7E] dark:text-dark-text">
                Enter
              </span>{" "}
              to add them
            </label>
          )}
          <Input
            onChange={onChange}
            className="flex-1 min-w-[200px] dark:bg-dark-surface dark:text-dark-text dark:border-dark-border"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {teamMembers.map((member) => (
          <Badge key={member.id} name={member.name} image={member.image} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
