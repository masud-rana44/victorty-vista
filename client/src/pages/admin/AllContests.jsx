import Loader from "../../components/shared/Loader";
import useContestForAdmin from "../../hooks/useContestsForAdmin";
import ContestsTable from "./ContestsTable";

const AllContests = () => {
  const { contests, isLoading } = useContestForAdmin();

  if (isLoading) return <Loader />;

  console.log(contests);

  return (
    <div>
      <ContestsTable data={contests} />
    </div>
  );
};

export default AllContests;
