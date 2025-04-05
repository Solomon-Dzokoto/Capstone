import { axiosInstance } from "../service/instance";
import { toast } from "sonner";
export const getPermissions = async () => {
  try {
    const { data } = await axiosInstance.get("/api/v1/permissions");
    console.log("Permissions data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching permissions:", error);
    toast.error("Error fetching permissions");
    throw error;
  }
}