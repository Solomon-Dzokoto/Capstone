import { getEmployees } from "@api/employees";
import { useQuery } from "@tanstack/react-query";



export const useEmployee = () => {
const { data: employees, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const data = await getEmployees();
      console.log("Fetch Data", data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  return {
    employees,
    isLoading,
  }
}

