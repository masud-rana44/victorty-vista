import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import { getContestByIdForCreator } from "../api/contest";

const useContestByIdForCreator = (contestId) => {
  const { userData } = useUser();

  const {
    data: contest,
    error,
    isLoading,
    refetch,
  } = useQuery({
    enabled: !!userData,
    queryKey: ["contestByIdForCreator"],
    queryFn: async () =>
      await getContestByIdForCreator(contestId, userData?._id),
  });
  return { contest, refetch, error, isLoading };
};

export default useContestByIdForCreator;
