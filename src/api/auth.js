import { axiosInstance } from "../service/instance";
export const loginUser = async (credentials) => {
	console.log("credentials", credentials);
	try {
		const res = await axiosInstance.post("/auth/jwt/create/", credentials);
		return res;
	} catch (err) {
		console.log("error", err);
	}
};

export const registerUser = async (credentials) => {
	try {
		console.log("credentials", credentials);
		const res = await axiosInstance.post("/auth/users/", credentials, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return res;
	} catch (err) {
		console.log("error", err);
	}
};
