import React from "react";
import TeamMember from "./TeamMembers";
import Button from "@components/ui/Button";

const RoleDetailsCard = ({ role }) => {
  if (!role) {
    return null;
  }

  return (
    <article className="w-full lg:w-1/2">
      <div className="flex flex-col bg-white dark:bg-dark-surface rounded-xl border border-border dark:border-dark-border p-4 md:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-dark dark:text-dark-text">
            Role Details
          </h2>
          <div className="flex items-center gap-2 p-2 rounded-xl border border-border dark:border-dark-border">
            <img
              src="/assets/pp1.png"
              alt="Manager"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-dark dark:text-dark-text">
                James campion
              </p>
              <p className="text-xs text-subText dark:text-dark-subText">
                Manager
              </p>
            </div>
          </div>
        </div>

        <hr className="border-border dark:border-dark-border mb-6" />

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-dark dark:text-dark-text mb-3">
              {(role && role?.title) || "Solution Sales Specialist"}
            </h3>
            <p className="text-sm text-subText dark:text-dark-subText">
              <strong className="text-dark dark:text-dark-text">
                Role description:{" "}
              </strong>
              {(role && role?.description) ||
                "As a Solution Sales Specialist, you will be responsible for driving sales and revenue growth by providing innovative solutions to our clients. You will work closely with the sales team to identify opportunities and develop strategies to meet customer needs."}
            </p>
          </div>

          <hr className="border-border dark:border-dark-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-subText dark:text-dark-subText mb-1">
                Role ID:
              </h4>
              <p className="text-base font-medium text-dark dark:text-dark-text">
                {(role && role?.id) || "#123456789"}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-subText dark:text-dark-subText mb-1">
                Salary
              </h4>
              <p className="text-base font-medium text-dark dark:text-dark-text">
                $90,000/year
              </p>
            </div>
            <div>
              <h4 className="text-sm text-subText dark:text-dark-subText mb-1">
                Access Level:
              </h4>
              <p className="text-base font-medium text-dark dark:text-dark-text">
                Manager
              </p>
            </div>
            <div>
              <h4 className="text-sm text-subText dark:text-dark-subText mb-1">
                Benefits
              </h4>
              <p className="text-base font-medium text-dark dark:text-dark-text">
                No Benefits
              </p>
            </div>
          </div>

          <hr className="border-border dark:border-dark-border" />

          <div>
            <h4 className="text-sm text-subText dark:text-dark-subText mb-3">
              Teams:
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="text-sm px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-dark-surface text-dark dark:text-dark-text"
              >
                Marketing team
              </Button>
              <Button
                variant="design"
                className="text-sm px-3 py-1.5 bg-pink-100 dark:bg-pink-900/20 rounded-full text-pink-900 dark:text-pink-200"
              >
                Design and product team
              </Button>
            </div>
          </div>

          <div className="space-y-4">
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
            <TeamMember image="/assets/pp2.png" name="Tassy Omah" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default RoleDetailsCard;
