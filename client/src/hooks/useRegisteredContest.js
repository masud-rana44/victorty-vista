import { useQuery } from "@tanstack/react-query";
import { getRegisteredContests } from "../api/contest";

const useRegisteredContest = () => {
  const {
    data: contests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["registeredContest"],
    queryFn: getRegisteredContests,
  });

  return { contests, error, isLoading };
};

export default useRegisteredContest;
