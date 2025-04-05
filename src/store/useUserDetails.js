import {create} from "zustand"

export const useAssignEmployee = create((set)=>({
    user: {},
    setEmployeeToAssignRole: (user) => set({user}),
}))

export const getFirstLetters = (name) => {
   if (!name) return "";
   return name
     .split(" ")
     .map((letters) => letters[0])
     .join("");
 };