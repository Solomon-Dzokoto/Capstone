import React from "react";

const RoleSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white dark:bg-dark-surface p-4 rounded-lg border border-border dark:border-dark-border"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 dark:bg-dark-surface rounded-full" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 dark:bg-dark-surface rounded" />
                <div className="h-3 w-24 bg-gray-200 dark:bg-dark-surface rounded" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-20 h-8 bg-gray-200 dark:bg-dark-surface rounded-full" />
              <div className="w-8 h-8 bg-gray-200 dark:bg-dark-surface rounded-full" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-gray-200 dark:bg-dark-surface rounded" />
            <div className="h-3 w-1/2 bg-gray-200 dark:bg-dark-surface rounded" />
          </div>

          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((tag) => (
              <div
                key={tag}
                className="w-16 h-6 bg-gray-200 dark:bg-dark-surface rounded-full"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleSkeleton;
