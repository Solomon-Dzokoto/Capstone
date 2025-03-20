import { ArrowLeft, Details, Edit, MoreLike } from "@global/Icons";
import Button from "@components/ui/Button";
import { useState } from "react";

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
  "/assets/profile.jpeg",
  "/assets/profile.jpeg",
];

const teamMembers = [
  {
    name: "Tassy Omah",
    role: "Developer Relations, Payments",
    image: "/assets/profile.jpeg",
  },
  {
    name: "James Muriel",
    role: "Developer Relations, Payments",
    image: "/assets/profile.jpeg",
  },
  {
    name: "James Muriel",
    role: "Developer Relations, Payments",
    image: "/assets/profile.jpeg",
  },
];
const Role = () => {
  const [active, setActive] = useState("general");
  return (
    <section className="">
      <button className="flex ml-8 mt-4 items-center gap-2 text-subText">
        <ArrowLeft className="w-[.9rem] " />
        Employees
      </button>
      <div className="flex px-8  py-5 items-center  justify-between">
        <div className="flex item-center justify-center gap-2">
          <h2 className="text-2xl leading-6">Tanner Finsha</h2>
          <p className="bg-border rounded-2xl  py-0.5 px-2 text-xs text-subText  ">
            #Employee ID: <span className="text-dark">23454GH6J7YT6</span>{" "}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="py-2 text-sm rounded-lg ">
            <Edit className="text-subText" />
            Sales specialist
            <Details className="text-subText " />
          </Button>
          <Button
            variant="ghost"
            className="py-2 text-subText text-sm rounded-lg "
          >
            <MoreLike />
          </Button>
        </div>
      </div>
      <ul className="border-b  px-8  flex  border-border mt-4">
        {category.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex ${
              active === item.id
                ? "text-primary  border-b-2 border-primary"
                : "text-subText"
            } items-center justify-between px-3 transition-all duration-200 cursor-pointer text-sm  py-2`}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <div className="bg-white flex gap-8 p-8 rounded-lg border-border shadow-lg ">
        {/* Header Section */}
        <div className=" w-auto border border-border p-4 rounded-xl min-w-[19rem] max-w-[25rem] ">
          <div className="border-b space-y-4 pb-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/profile.jpeg"
                className="size-16 rounded-full"
                alt=""
              />
              <div className=" space-y-1">
                <h1 className="text-lg font-bold text-dark">Tanner Finsha</h1>
                <p className="text-subText">@Tannerfisher@gmail.com</p>
                <Button
                  className="py-0.5 text-xs  px-3"
                  variant="inactive"
                  size="sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  Inactive
                </Button>
              </div>
            </div>
            <ul className=" gap-4 flex">
              {[
                { number: 15, name: "Projects" },
                { number: 124, name: "Tasks completed" },
                { number: 12, name: "Tasks pending" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="text-subText text-sm font-medium text-center"
                >
                  <p className="font-bold text-lg text-dark">{item.number}</p>
                  <p className="text-subText text-sm  whitespace-nowrap">
                    {" "}
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Role Section */}
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-subText text-sm font-medium">Email</p>
              <p className="font-normal text-[#091E42] ">
                invision@invisionapp.com
              </p>
            </div>
            <div>
              <p className="text-subText text-sm font-medium">Role</p>
              <p className="font-normal text-[#091E42] ">
                Senior Backend, Full time
              </p>
            </div>
            <div>
              <p className="text-subText text-sm font-medium">Phone</p>
              <p className="font-normal text-[#091E42] ">+144–3412–4422</p>
            </div>
            <div>
              <p className="text-subText text-sm font-medium">Social handle</p>
              <p className="font-normal text-[#091E42] ">@invisionapp</p>
            </div>
            <div>
              <p className="text-subText text-sm font-medium">Work Location</p>
              <p className="font-normal text-[#091E42] ">New York, NY</p>
            </div>
            <div>
              <p className="text-subText text-sm font-medium">Join Date</p>
              <p className="font-normal text-[#091E42] ">12 April, 2022</p>
            </div>
            <div>
              <p className="text-subText text-sm font-medium">Date of Birth</p>
              <p className="font-normal text-[#091E42] ">12 April</p>
            </div>
          </div>
        </div>

        {/* Other Detail s Section */}
        <div className=" flex-1 flex justify-between  gap-8 ">
          <div className=" space-y-4 min-w-[19.35rem]  ">
            <div className="p-4 rounded-xl border border-border">
              <h2 className="text-lg font-bold text-dark">Other details</h2>
              <div className="mt-4 space-y-1">
                <p className="text-subText text-sm ">2016 - 2021, BSC</p>
                <p className="text-dark"> Design Communication visuals,</p>
                <p className="text-[#B2BBC6]"> Jember University</p>
              </div>
              <p className="text-subText">
                Gender <br />
                <span className="font-normal text-[#091E42] ">Female</span>
              </p>
            </div>
            {/* Teams Section */}
            <div className="p-4 rounded-xl  border border-border">
              <div className=" border-b border-border pb-4">
                <h2 className="text-sm text-subText ">Teams:</h2>
                <div className="mt-4 flex  gap-2">
                  <Button className="text-[.7rem] " variant="outline">
                    Marketing team
                  </Button>
                  <Button className="text-[.7rem] " variant="design">
                    Design and product team
                  </Button>
                </div>
              </div>

              {/* Team Members Section */}
              <section>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium  text-[#47586E]">
                    Team Members
                  </h2>
                  <Button variant="raw" className="text-xs">
                    View all
                    <ArrowLeft className="rotate-180 w-4" />
                  </Button>
                </div>

                <div className="mt-4 space-y-2">
                  <ul className="list-disc list-inside pl-5">
                    {teamMembers.map((member, index) => (
                      <li
                        key={index}
                        className="text-subText p-4 gap-2 flex items-center justify-between"
                      >
                        <img
                          className="size-8 rounded-full "
                          src={member?.image}
                          alt={member?.name}
                        />
                        <div>
                          <p className="text-sm whitespace-nowrap text-dark font-bold ">
                            {" "}
                            {member.name}{" "}
                          </p>
                          <p className="text-sm whitespace-nowrap text-subText font-normal ">
                            {" "}
                            {member.role}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center">
                    <div className="flex items-center -space-x-5">
                      {teamMembersImages.slice(0, 5).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Team member ${index + 1}`}
                          className="size-10 rounded-full border-2 border-white"
                        />
                      ))}
                      <div className="size-10 rounded-full bg-tertiary text-xs flex items-center justify-center border-2 border-white">
                        12+
                      </div>
                    </div>
                    <p className="text-subText text-sm font-medium text-sm">
                      Core team members
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="space-y-6 ">
            <div className="bg-white border border-border p-4 rounded-lg">
              <div className="mb-6">
                <h2 className="text-sm text-subText mb-6">Reports to:</h2>
                <div className=" flex items-center rounded-md border px-4 py-0.5 border-border gap-2 ">
                  <img
                    className="size-9 rounded-full"
                    src="/assets/profile.jpeg"
                    alt=""
                  />
                  <div>
                    <p className="text-dark whitespace-nowrap mt-2">
                      James Campion
                    </p>
                    <p className="text-subText whitespace-nowrap">
                      Engineering lead
                    </p>
                  </div>
                  <ArrowLeft className="rotate-180 w-4" />
                </div>
              </div>
              <div className="   space-y-4">
                <div className="flex  items-center gap-2 p-4 rounded-lg border border-border">
                  <h2 className="text-sm whitespace-nowrap text-dark">
                    Access Role:{" "}
                    <span className="font-semibold">Admin Access</span>
                  </h2>
                  <Details />
                </div>

                <div className="flex items-center gap-2 p-4 rounded-lg border border-border">
                  <h2 className="text-sm whitespace-nowrap text-dark">
                    Work hours:{" "}
                    <span className="font-semibold">8am - 5pm WAT</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 p-4 rounded-lg border border-border">
                  <h2 className="text-sm whitespace-nowrap text-dark">
                    Work hours:{" "}
                    <span className="font-semibold">8am - 5pm WAT</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 p-4 rounded-lg border border-border">
                  <h2 className="text-sm whitespace-nowrap text-dark">
                    Work hours:{" "}
                    <span className="font-semibold">8am - 5pm WAT</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border p-4 rounded-lg">
              <h2 className="text-lg font-extrabold text-dark">
                Role and Responsibilities
              </h2>
              <p className="text-subText mt-2 font-normal ">
                Designing products, organizing team meetings, screening and
                hiring product designers of all levels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;
