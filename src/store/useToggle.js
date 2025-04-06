import { create } from "zustand";
import { produce } from "immer";

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
		set(
			produce((state) => {
				state.toggles[type] = !state.toggles[type];
			})
		),
	updateEnableAll: (type) =>
		set(
			produce((state) => {
				const newValue = !state.enableAll[type];
				state.enableAll[type] = newValue;

				// Update all toggles that match the type prefix
				Object.keys(state.toggles).forEach((key) => {
					if (key.startsWith(type)) {
						state.toggles[key] = newValue;
					}
				});
			})
		),
}));

export default useToggle;
