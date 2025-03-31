import {create} from "zustand"

export const useUserDetail = create((set)=>({
    user: {},
    setUser: (user) => set({user}),
}))

export const getFirstLetters = (name) => {
   if (!name) return "";
   return name
     .split(" ")
     .map((letters) => letters[0])
     .join("");
 };