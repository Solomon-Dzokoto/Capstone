import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

const useUser = create(
	persist(
		devtools(
			(set) => ({
				user: null,
				isLoggedIn: false,
				rememberMe: false,
				setRememberMe: (rememberMe) => set({ rememberMe }),
				setUser: (user) => set({ user, isLoggedIn: true }, false, "SET-USER"),
				logout: () => set({ user: null, isLoggedIn: false }),
			}),
			{
				name: "stored-user",
				storage: createJSONStorage(() => localStorage),
			}
		)
	)
);

export default useUser;
