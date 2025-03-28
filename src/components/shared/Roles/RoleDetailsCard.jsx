"use client";
import React from "react";
import TeamMember from "./TeamMembers";
import Button from "@components/ui/Button";

const RoleDetailsCard = () => {
  return (
    <article className="max-md:ml-0 max-w-[50%] max-md:w-auto">
      <div className="flex flex-col gap-y-6 px-5 pt-6 w-auto rounded-2xl border border-solid border-border max-w-[538px] max-md:pl-5 max-md:max-w-auto">
        <div className="flex flex-wrap gap-10 max-md:mr-2 max-md:max-w-auto">
          <h2 className="flex-1 self-start mt-3.5 text-xl font-black min-h-[34px] text-dark">
            Role Details
          </h2>
          <div className="flex flex-col flex-1 justify-center text-sm">
            <div className="flex gap-1.5 items-center py-0.5 w-auto rounded-xl border border-solid border-border max-w-[200px]">
              <div className="flex gap-2 justify-center items-center  px-4 py-0.5 my-auto min-h-11 rounded-[29px]">
                <img
                  src="/assets/pp1.png"
                  alt="Manager"
                  className="object-contain shrink-0  my-auto aspect-square min-h-[34px] w-[34px]"
                />
                <div className="flex flex-col justify-center  my-auto w-[126px]">
                  <p className="leading-none text-blue-950">James campion</p>
                  <p className="leading-loose text-slate-400">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" w-auto h-px bg-border " />

        <section className=" mt-8 max-w-auto h-auto w-auto max-md:mt-10">
          <h3 className="text-lg font-black text-dark">
            Solution Sales Specialist
          </h3>
          <p className="mt-4 text-sm font-medium text-gray-500">
            <strong className="font-black text-[#091E42]">
              Role description:
            </strong>{" "}
            Responsible for driving revenue growth by identifying and pursuing
            new business opportunities, as well as maintaining relationships
            with existing clients. working closely with customers to understand
            their needs and provide solutions that meet or exceed their
            expectations, while also achieving the company's sales goals.
          </p>
        </section>

        <hr className=" w-auto h-px bg-border max-md:mt-10" />

        <section className="flex flex-col gap-7 mt-4">
          <div className="flex gap-3 justify-center items-center self-center font-medium">
            <div className="flex flex-col items-start  pr-14 my-auto min-w-60 w-auto">
              <h4 className="text-sm text-slate-600">Role ID:</h4>
              <p className="text-base leading-none text-dark">#23GH 567HG</p>
            </div>
            <div className="flex flex-col items-start  pr-8 my-auto w-[150px]">
              <h4 className="text-sm text-slate-600">Salary</h4>
              <p className="text-base leading-none text-dark">$90000/year</p>
            </div>
          </div>

          <div className="flex gap-3 justify-center items-center self-center font-medium">
            <div className="flex flex-col items-start  pr-14 my-auto min-w-60 w-auto">
              <h4 className="text-sm text-slate-600">Access Level:</h4>
              <p className="text-base leading-none text-dark">Manager</p>
            </div>
            <div className="flex flex-col items-start  pr-8 my-auto w-[150px]">
              <h4 className="text-sm text-slate-600">Benefits</h4>
              <p className="text-base leading-none text-dark">No Benefits</p>
            </div>
          </div>
        </section>

        <hr className=" w-auto h-px bg-border" />

        <section className="mt-4 mb-6">
          <h4 className="text-sm text-slate-600">Teams:</h4>
          <div className="flex items-center py-4 pr-6 max-w-auto text-xs text-center w-[296px]">
            <div className="flex gap-1 justify-center items-center  my-auto min-w-60">
              <Button
                variant="outline"
                className="px-2 py-0.5 rounded-2xl bg-neutral-100 text-dark"
              >
                Marketing team
              </Button>
              <Button
                variant="design"
                className="px-2 py-0.5 bg-pink-100 rounded-2xl text-pink-900"
              >
                Design and product team
              </Button>
            </div>
          </div>
        </section>

        <section className=" text-sm leading-none">
          <TeamMember
            image="/assets/pp2.png"
            name="Tassy Omah"
            role="Developer Relations, Payments"
          />
          <TeamMember
            image="/assets/pp2.png"
            name="Tassy Omah"
            role="Developer Relations, Payments"
          />
          <TeamMember image="/assets/pp2.png" name="Tassy Omah" role="" />
        </section>
      </div>
    </article>
  );
};

export default RoleDetailsCard;
