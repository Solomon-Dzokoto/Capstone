import {create} from "zustand"
import { produce } from "immer";


console.log(produce)
const useToggle = create(
    produce((set) => ({
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
        "employee-delete": false
    },
    enableAll: {
        manager: false,
        employee: false
    },
    toggle: (type) => set((state) => {
        state.toggles[type] = !state.toggles[type];
    }),
    updateEnableAll: (type) => set((state) => {
        const newValue = !state.enableAll[type];
        state.enableAll[type] = newValue;
        
        // Update all toggles that match the type prefix
        for (const key in state.toggles) {
            if (key.startsWith(type)) {
                state.toggles[key] = newValue;
            }
        }
    })
})))

export default useToggle
