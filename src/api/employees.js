import { axiosInstance } from "../service/instance";

export const getEmployees = async (searchQuery = "") => {
	try {
		const { data } = await axiosInstance.get(
			`/api/v1/employees/?search=${searchQuery}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			}
		);
		console.log("Employees data:", data?.results);
		return data?.results;
	} catch (error) {
		console.error("Error fetching employees:", error);
		throw error;
	}
};

export const getAnEmployee = async () => {
	try {
		const { data } = await axiosInstance.get("/api/v1/employees/me/", {
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

export const getAllUsers = async () => {
	try {
		const { data } = await axiosInstance.get("/auth/users/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		});
		console.log("Users data:", data);
		return data;
	} catch (error) {
		console.error("Error fetching users:", error);
		throw error;
	}
};
