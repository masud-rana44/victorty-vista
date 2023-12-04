import { useQuery } from "@tanstack/react-query";
import { getBestCreators } from "../api/contest";

const useBestCreators = () => {
  const {
    data: creators,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bestCreators"],
    queryFn: getBestCreators,
  });

  return { creators, error, isLoading };
};

export default useBestCreators;
