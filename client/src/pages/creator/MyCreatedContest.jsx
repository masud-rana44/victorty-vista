import Loader from "../../components/shared/Loader";
import useContestByCreator from "../../hooks/useContestByCreator";
import CreatedContestTable from "./CreatedContestTable";

const MyCreatedContest = () => {
  const { contests, isLoading } = useContestByCreator();

  if (isLoading) return <Loader />;

  return (
    <div>
      <CreatedContestTable data={contests} />
    </div>
  );
};

export default MyCreatedContest;
