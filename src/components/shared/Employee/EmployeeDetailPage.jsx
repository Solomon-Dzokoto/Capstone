import { ArrowLeft, MoreLike, ProfileAvatar } from "@global/Icons";
import Button from "@components/ui/Button";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import { employees } from "@data/list";
import { useQuery } from "@tanstack/react-query";
import { getAnEmployee } from "@/api";

const category = [
  { id: "general", name: "General Info" },
  { id: "department", name: "Department" },
  { id: "reminders", name: "Reminders" },
  { id: "performance", name: "Performance" },
  { id: "salary", name: "Salary and benefits" },
  { id: "feedback", name: "Feedback" },
];

const teamMembersImages = [
  "/assets/profile.jpeg",
  "/assets/profile.jpeg",
  "/assets/profile.jpeg",
  "/assets/profile.jpeg",
];

const teamMembers = [
  {
    name: "Tassy Omah",
    title: "Developer Relations, Payments",
    image: "/assets/profile.jpeg",
  },
  {
    name: "James Muriel",
    title: "Developer Relations, Payments",
    image: "/assets/profile.jpeg",
  },
];

const EmployeeDetailsPage = () => {
  const [active, setActive] = useState("general");
  const { id } = useParams();
  const { data: employee } = useQuery({
    queryKey: ["employee", id],
    queryFn: async () => {
      const data = await getAnEmployee();
      return data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  console.log("Employee data:", employee);

  return (
    <section className="p-4 md:p-6 bg-white dark:bg-dark-bg ">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-subText dark:text-dark-subText mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Employees
      </button>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-2xl font-semibold text-dark dark:text-dark-text">
            {employee?.user.first_name + " " + employee?.user?.last_name ||
              "Tanner Finsha"}
          </h2>
          <span className="bg-border dark:bg-dark-border rounded-2xl py-0.5 px-2 text-[.6rem] text-subText dark:text-dark-subText">
            #Employee ID:{" "}
            <span className="text-dark dark:text-dark-text">
              {employee?.id || "23454GH6J7YT6"}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 dark:text-dark-text"
          >
            <ProfileAvatar className="w-4 h-4" />
            <span>Profile</span>
          </Button>
          <Button
            variant="ghost"
            className="py-2 text-subText dark:text-dark-subText text-sm rounded-lg"
          >
            <MoreLike />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <ul className="flex gap-4 border-b border-border dark:border-dark-border mb-6 whitespace-nowrap">
          {category.map((item) => (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer px-3 py-2 text-sm transition-colors ${
                active === item.id
                  ? "border-b-2 border-primary text-primary dark:text-dark-primary"
                  : "text-subText dark:text-dark-subText hover:text-dark dark:hover:text-dark-text"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <section className="px-9 pt-8 pb-14 rounded-xl border  border-border max-md:px-5">
        <div className="flex gap-8 items-start w-full min-h-[677px] max-md:max-w-full">
          {/* User Profile Section */}
          <aside className="flex flex-col justify-center items-center pt-4 rounded-xl border  border-border min-h-[677px] min-w-60 w-auto">
            {/* Profile Header */}
            <header className="flex gap-5 items-center">
              <img
                src="/assets/profile.jpeg"
                className="object-cover  my-auto aspect-square  rounded-[400px] size-8"
                alt="Profile"
              />

              <div className=" my-auto w-auto">
                <h1 className="text-base font-semibold leading-none text-gray-900">
                  {employee?.user.first_name +
                    " " +
                    employee?.user?.last_name || "Tanner Finsha"}
                </h1>
                <p className="text-sm leading-none text-slate-500">
                  @{employee?.email || "dzakpatabedevimenykua@gmail.com"}
                </p>
                <div className="flex items-center py-1 w-full text-[.6rem]  text-center text-red-500 whitespace-nowrap min-h-[27px]">
                  <div className="flex items-start  my-auto bg-blend-multiply">
                    <div className="flex gap-1.5 justify-center items-center py-0.5 pr-2 pl-1.5 bg-orange-50 rounded-2xl">
                      <Button></Button>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section className="flex gap-4 items-start mt-7 max-w-full text-center w-auto">
              <article className="flex flex-col flex-1 shrink items-center whitespace-nowrap basis-0">
                <h2 className="text-lg font-bold tracking-normal leading-none text-sky-950">
                  15
                </h2>
                <p className="text-[.6rem]  tracking-wide leading-tight text-gray-400">
                  Projects
                </p>
              </article>
              <article className="flex flex-col flex-1 shrink items-center basis-0">
                <h2 className="text-lg font-bold tracking-normal whitespace-nowrap leading-none text-sky-950">
                  124
                </h2>
                <p className="text-[.6rem] whitespace-nowrap   tracking-wide leading-tight text-gray-400">
                  Tasks completed
                </p>
              </article>
              <article className="flex flex-col flex-1 shrink items-center basis-0">
                <h2 className="text-lg font-bold  tracking-normal leading-none text-sky-950">
                  12
                </h2>
                <p className="text-[.6rem] whitespace-nowrap   tracking-wide leading-tight text-gray-400">
                  Tasks pending
                </p>
              </article>
            </section>

            <hr />

            {/* User Info */}
            <section className="overflow-hidden px-5 pb-6 mt-7 max-w-full w-auto max-md:pl-5">
              <div className="h-[430px]">
                {[
                  {
                    label: "Email",
                    value: employee?.email || "invision@invisionapp.com",
                  },
                  { label: "Role", value: "Senior Backend, Full time" },
                  { label: "Phone", value: "+144–3412–4422" },
                  { label: "Social handle", value: "@invisionapp" },
                  { label: "Work Location", value: "New York, NY" },
                  { label: "Join Date", value: "12 April, 2022" },
                  { label: "Date of Birth", value: "12 April" },
                ].map((field, index) => (
                  <div
                    key={index}
                    className="flex overflow-hidden flex-col items-start pr-14 mt-6 w-full whitespace-nowrap max-md:pr-5"
                  >
                    <h3 className="text-sm  text-slate-600">{field.label}:</h3>
                    <p className="text-base leading-none text-sky-950">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* Role Details Section */}
          <section className="px-1.5 pb-2.5 rounded-xl min-w-60 w-auto max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-7">
                  {/* Other Details Section */}
                  <section className="flex flex-col items-start py-6 pr-16 pl-8 text-sm  rounded-xl border  border-border max-md:px-5">
                    <h2 className="text-lg font-black text-slate-700">
                      Other details
                    </h2>
                    <p className="mt-5 text-slate-600">2016 - 2021, BSC</p>
                    <p className="text-xs  whitespace-nowrap text-sky-950">
                      Design Communication visuals
                    </p>
                    <p className="mt-1 text-gray-400">Jember University</p>
                    <p className="mt-7 text-slate-600">Gender</p>
                    <p className="text-base leading-none text-sky-950">
                      Female
                    </p>
                  </section>

                  {/* Team Section */}
                  <section className="flex flex-col p-4 mt-4 w-full rounded-xl border border-border">
                    <h2 className="text-sm font-medium text-slate-600">
                      Teams
                    </h2>

                    {/* Team Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-neutral-100 text-sky-950">
                        Marketing team
                      </span>
                      <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-900">
                        Design and product team
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <h3 className="text-sm font-medium text-slate-600">
                        Team members
                      </h3>
                      <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
                        <span>View all</span>
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 12l4-4-4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Team Member Cards */}
                    <div className="mt-4 space-y-3">
                      {teamMembers?.map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white dark:bg-dark-surface rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-slate-700 truncate">
                              {member.name}
                            </h4>
                            <p className="text-xs text-gray-500 truncate">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                      <div className="flex -space-x-2">
                        {teamMembersImages?.map((image, i) => (
                          <img
                            key={i}
                            src={image}
                            alt="Team member"
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">
                        Core team members
                      </span>
                    </div>
                  </section>
                </div>
              </div>

              <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="max-md:mt-7">
                  {/* Reports To Section */}
                  <section className="px-5 py-6 rounded-xl border  border-border">
                    <h2 className="text-sm  text-slate-600">Reports to:</h2>
                    <div className="flex gap-1.5 items-center p-2 mt-3.5 w-full rounded-md border  border-border ">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/0849aea94f584c11b85ca93b61d87c2a/e1c6383775b2235ce245495039eb80e538d6c401?placeholderIfAbsent=true"
                        className="object-contain  my-auto aspect-square min-h-[34px] w-[34px]"
                        alt="James campion"
                      />
                      <div className="flex flex-col justify-center  my-auto w-[126px]">
                        <h3 className="text-sm leading-none text-blue-950">
                          James campion
                        </h3>
                        <p className="text-xs leading-none text-slate-400">
                          Engineering lead
                        </p>
                      </div>
                      <ArrowLeft className="rotate-180" />
                    </div>

                    {/* Access Role Section */}
                    <div className="mt-5 w-full text-sm leading-none text-sky-950">
                      {[
                        { label: "Access Role:", value: "Admin Access" },
                        { label: "Work hours:", value: "8am - 5pm WAT" },
                        { label: "Work hours:", value: "8am - 5pm WAT" },
                        { label: "Work hours:", value: "8am - 5pm WAT" },
                      ].map((role, index) => (
                        <div
                          key={index}
                          className="flex gap-px items-center mt-3 w-full "
                        >
                          <div className="flex gap-1.5 items-center  py-0.5 pr-2 my-auto rounded-md border  border-border w-auto">
                            <div className="gap-2 justify-center items-center  px-4 py-3 my-auto min-h-11 rounded-[29px]">
                              <span className="text-sm  text-sky-950">
                                {role.label}
                              </span>{" "}
                              <span className="text-sm  text-sky-950">
                                {role.value}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="flex flex-col px-6 pt-6  mt-5 rounded-xl border  border-border max-md:pb-24 max-md:pl-5">
                    <h2 className=" text-sm font-black text-slate-700">
                      Role and Responsibilities
                    </h2>
                    <p className="mt-6  text-sm leading-6 text-slate-600 max-md:mb-2.5">
                      Designing products, organizing team meeting, screening and
                      hiring product designers of all levels
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default EmployeeDetailsPage;
