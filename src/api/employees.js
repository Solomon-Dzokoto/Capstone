import { axiosInstance } from "../service/instance";

export const getEmployees = async () => {
	try {
		const { data } = await axiosInstance.get("/api/v1/employees/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		});
		console.log("Employees data:", data);
		return data;
	} catch (error) {
		console.error("Error fetching employees:", error);
		throw error;
	}
};
