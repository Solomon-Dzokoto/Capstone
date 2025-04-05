import { getEmployees } from "@api/employees";
import { useQuery } from "@tanstack/react-query";

export const useEmployee = (searchQuery = "") => {
	const { data: employees, isLoading } = useQuery({
		queryKey: ["employees", searchQuery],
		queryFn: async () => {
			const data = await getEmployees(searchQuery);
			return data;
		},
		staleTime: 1000 * 60 * 5,
		cacheTime: 1000 * 60 * 10,
	});

	return {
		employees,
		isLoading,
	};
};
