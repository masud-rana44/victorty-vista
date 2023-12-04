import { useQuery } from "@tanstack/react-query";
import { getPopularContests } from "../api/contest";

const usePopularContests = (text) => {
  const {
    data: contests,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contests", "popular"],
    queryFn: async () => await getPopularContests(text),
  });

  return { contests, error, isLoading, refetch };
};

export default usePopularContests;
