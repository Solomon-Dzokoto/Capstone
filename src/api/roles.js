import { axiosInstance } from "../service/instance";
import { toast } from "sonner";
export const getAllRoles = async () => {  
    try{
       const {data} = await axiosInstance.get("/api/v1/roles")
       console.log("Roles data:", data);
       return data;
    }catch(error){
        console.error("Error fetching roles:", error);
        toast.error("Error fetching roles");
        throw error;
    }
}
export const getARole= async (id) => {  
    try{
       const {data} = await axiosInstance.get(`/api/v1/roles/${id}`)
       console.log("Roles data:", data);
       return data;
    }catch(error){
        console.error("Error fetching roles:", error);
        toast.error("Error fetching roles");
        throw error;
    }

}