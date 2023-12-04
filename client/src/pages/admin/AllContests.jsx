import Loader from "../../components/shared/Loader";
import SectionHeading from "../../components/shared/SectionHeading";
import useContestForAdmin from "../../hooks/useContestsForAdmin";
import ContestsTable from "./ContestsTable";

const AllContests = () => {
  const { contests, isLoading } = useContestForAdmin();

  if (isLoading) return <Loader />;

  return (
    <div>
      <SectionHeading>All Contests</SectionHeading>
      <ContestsTable data={contests} />
    </div>
  );
};

export default AllContests;
