import React from "react";

const TableSkeleton = ({ columns = 4, rows = 5 }) => {
  return (
    <div className="w-full border border-border dark:border-dark-border rounded-lg overflow-hidden">
      <div className="animate-pulse">
        <div className="bg-white dark:bg-dark-surface border-b border-border dark:border-dark-border p-4">
          <div className="flex gap-4">
            {[...Array(columns)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 dark:bg-dark-surface rounded flex-1"
              />
            ))}
          </div>
        </div>

        {[...Array(rows)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="bg-white dark:bg-dark-surface border-b border-border dark:border-dark-border p-4"
          >
            <div className="flex gap-4">
              {[...Array(columns)].map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="h-4 bg-gray-200 dark:bg-dark-surface rounded flex-1"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
