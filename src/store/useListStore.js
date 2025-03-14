import  {create} from "zustand"
import { devtools,persist } from "zustand/middleware"


export const useList = create(
    devtools(persist((set)=>({
        active:"dashboard",
        hide:false,
        employeeList:"all",
        setActive:(value)=>set({active:value}),
        setEmployeeList:(value)=>set({active:value}),
        setHide:()=>set(state=>({hide:!state.hide}))    
}))))