import axios from "axios";

const baseUrl =
	import.meta.env.VITE_BASE_URL ||
	"https://web-xa1s8fkrksww.up-de-fra1-k8s-1.apps.run-on-seenode.com";

export const axiosInstance = axios.create({
	baseURL: `${baseUrl}`,
	times: 10000,
});
