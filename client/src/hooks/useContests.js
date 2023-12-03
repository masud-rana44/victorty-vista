import { useQuery } from "@tanstack/react-query";
import { getAllContests } from "../api/contest";

const useContests = () => {
  const {
    data: contests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contests"],
    queryFn: () => getAllContests(),
  });
  return { contests, error, isLoading, refetch };
};

export default useContests;
