import {create} from "zustand"


export const useModal = create(
    (set)=>({
        modal:{modalState:"close",modalType:"assign-role"},
        updateModal:(value)=>set({modal: value})
    })
)