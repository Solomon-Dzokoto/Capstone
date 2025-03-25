"use client";
import React, { createContext, useContext, useState } from "react";

const PermissionsContext = createContext();

const usePermissions = () => {
  const context = useContext(PermissionsContext);
  if (!context) {
    throw new Error("usePermissions must be used within a PermissionsProvider");
  }
  return context;
};

export const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState({
    addDeleteEmployee: true,
    addEditRoles: false,
    accessNewHires: false,
    accessSettings: false,
    accessDashboard: false,
    modifyEmployee: true,
    modifyRoles: true,
  });

  const togglePermission = (key) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <PermissionsContext.Provider value={{ permissions, togglePermission }}>
      {children}
    </PermissionsContext.Provider>
  );
};

export default usePermissions;
