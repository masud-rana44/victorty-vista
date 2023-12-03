import Loader from "../components/shared/Loader";
import useContests from "../hooks/useContests";

const Contests = () => {
  const { contests, isLoading } = useContests("");

  if (isLoading) return <Loader />;

  console.log(contests);
  return <div>Contests</div>;
};

export default Contests;
