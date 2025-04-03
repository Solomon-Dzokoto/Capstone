import { create } from "zustand";

const useToggle = create((set) => ({
	toggles: {
		"manager-general-access": false,
		"manager-create-job": false,
		"manager-employee": false,
		"manager-edit-role": false,
		"manager-delete": false,
		"employee-general-access": false,
		"employee-create-job": false,
		"employee-employee": false,
		"employee-edit-role": false,
		"employee-delete": false,
	},
	enableAll: {
		manager: false,
		employee: false,
	},
	toggle: (type) =>
		set((state) => ({
			toggles: {
				...state.toggles,
				[type]: !state.toggles[type],
			},
		})),
	updateEnableAll: (type) =>
		set((state) => {
			const currentValue = state.enableAll[type];
			const newValue = !currentValue;

			const updatedToggles = { ...state.toggles };
			for (const key in state.toggles) {
				if (key.startsWith(type)) {
					updatedToggles[key] = newValue;
				}
			}

			return {
				toggles: updatedToggles,
				enableAll: {
					...state.enableAll,
					[type]: newValue,
				},
			};
		}),
}));

export default useToggle;
