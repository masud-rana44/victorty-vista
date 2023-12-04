import Container from "../../components/shared/Container";
import Loader from "../../components/shared/Loader";
import SectionHeading from "../../components/shared/SectionHeading";
import useWinners from "../../hooks/useWinners";

const Winners = () => {
  const { contests, isLoading } = useWinners();
  if (isLoading) return <Loader />;

  console.log(contests);
  return (
    <div className="mt-20">
      <Container>
        <SectionHeading>Our Winners</SectionHeading>
      </Container>
    </div>
  );
};

export default Winners;
