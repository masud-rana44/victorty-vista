import { useQuery } from "@tanstack/react-query";
import { getLeaderBoard } from "../api/contest";

const useLeaderBoard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderBoard,
  });

  return { data, error, isLoading };
};

export default useLeaderBoard;
