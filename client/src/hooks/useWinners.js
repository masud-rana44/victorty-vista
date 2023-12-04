import { useQuery } from "@tanstack/react-query";
import { getWinners } from "../api/contest";

const useWinners = () => {
  const {
    data: contests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["winners"],
    queryFn: getWinners,
  });
  return { contests, error, isLoading, refetch };
};

export default useWinners;
