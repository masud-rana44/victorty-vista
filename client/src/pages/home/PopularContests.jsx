import Container from "../../components/shared/Container";
import ContestCard from "../../components/shared/ContestCard";
import Loader from "../../components/shared/Loader";
import SectionHeading from "../../components/shared/SectionHeading";
import usePopularContests from "../../hooks/usePopularContests";

const PopularContests = ({ text }) => {
  const { contests, isLoading } = usePopularContests(text);

  if (isLoading) return <Loader />;

  return (
    <div className="mt-20">
      <SectionHeading>Popular Contests</SectionHeading>
      <Container>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {contests?.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularContests;
