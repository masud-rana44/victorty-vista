import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getAllContests } from "../api/contest";

const useContests = (text) => {
  const [searchParams] = useSearchParams();

  // PAGINATION
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: contests = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["contests", page],
    queryFn: () => getAllContests(page, text),
  });
  return { contests, error, isLoading, refetch };
};

export default useContests;
