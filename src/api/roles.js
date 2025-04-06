import { axiosInstance } from "../service/instance";
import { toast } from "sonner";

export const getAllRoles = async (searchQuery = "") => {  
    try {
       const {data} = await axiosInstance.get(`/api/v1/roles`, {
         params: {
           search: searchQuery,
         }
       });
       return data;
    } catch(error) {
        console.error("Error fetching roles:", error);
        toast.error("Failed to fetch roles");
        return [];
    }
}

export const getARole= async (id) => {  
    try{
       const {data} = await axiosInstance.get(`/api/v1/roles/${id}`)
       return data;
    }catch(error){
        toast.error("Error fetching roles");
        throw error;
    }
}