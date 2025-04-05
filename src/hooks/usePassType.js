import { useState } from "react";

const usePassType = () => {
	const [type, setType] = useState("password");

	const changeType = () => {
		if (type === "password") {
			setType("text");
		} else {
			setType("password");
		}
	};
	return [type, changeType];
};
export default usePassType;

export const getUserShortName = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};
