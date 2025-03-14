import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useList = create(
	persist(
		devtools((set) => ({
			active: "dashboard",
			hide: false,
			employeeList: "all",
			setActive: (value) => set(() => ({ active: value }), false, "SET-ACTIVE"),
			setEmployeeList: (value) =>
				set(() => ({ employeeList: value }), false, "SET-EMPLOYEE"),
			setHide: () => set((state) => ({ hide: !state.hide }), false, "SET-HIDE"),
		})),
		{
			name: "list",
		}
	)
);
