import { axiosInstance } from "../service/instance";
import { toast } from "sonner";
export const loginUser = async (credentials) => {
	console.log("credentials", credentials);
	try {
		const { data } = await axiosInstance.post("/auth/jwt/create/", credentials);
		console.log("response", data);
		localStorage.setItem("access_token", data?.access);
		return data;
	} catch (err) {
		console.log(err);
		toast.error(err?.response?.data?.detail || "Something went wrong");
		throw Error;
	}
};

export const registerUser = async (credentials) => {
	try {
		console.log("credentials", credentials);
		const { data } = await axiosInstance.post("/auth/users/", credentials, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return data;
	} catch (err) {
		console.log(err);
		const message =
			err?.response?.data?.password[0] ||
			err?.response?.data?.username[0] ||
			err?.response?.data?.email[0] ||
			err?.response?.data?.first_name[0] ||
			err?.response?.data?.last_name[0];
		toast.error(message || "Something went wrong");
		throw Error;
	}
};
