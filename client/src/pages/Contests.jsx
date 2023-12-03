import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useContests from "../hooks/useContests";
import Loader from "../components/shared/Loader";
import Container from "../components/shared/Container";
import ContestCard from "../components/shared/ContestCard";
import Categories from "../components/shared/Categories";

const Contests = () => {
  const { contests, isLoading, refetch } = useContests();
  const [filteredContests, setFilteredContests] = useState([]);
  const [searchParas] = useSearchParams();

  const category = searchParas.get("category");

  useEffect(() => {
    refetch();

    // Filter the contests based on the category
    if (category) {
      const filtered = contests?.filter(
        (contest) => contest?.type?.toLowerCase() === category
      );
      setFilteredContests(filtered);
    } else {
      setFilteredContests(contests);
    }
  }, [category, contests, refetch]);

  if (isLoading) return <Loader />;

  return (
    <div className="mt-10">
      <Categories />
      <Container>
        {filteredContests?.length === 0 && (
          <p className="text-center font-medium mt-20 text-gray-600">
            No contests found
          </p>
        )}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredContests?.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Contests;
