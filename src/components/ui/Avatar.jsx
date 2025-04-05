import { useState } from "react";

const Avatar = ({
  src,
  alt = "User avatar",
  size = "md",
  fallback,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const getUserName = () => {
    if (!fallback) return "U";
    return fallback
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!src || imageError) {
    return (
      <div
        className={`${sizeClasses[size]} ${className} flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium ring-2 ring-white dark:ring-gray-800`}
        title={alt}
      >
        {getUserName()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className={`${sizeClasses[size]} ${className} rounded-full object-cover ring-2 ring-white dark:ring-gray-800`}
    />
  );
};

export default Avatar;
