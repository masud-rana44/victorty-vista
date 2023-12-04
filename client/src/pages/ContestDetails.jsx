import { useParams } from "react-router-dom";
import useContestById from "../hooks/useContestById";
import Loader from "../components/shared/Loader";
import DetailsHeader from "../components/shared/DetailsHeader";
import DetailsBody from "../components/shared/DetailsBody";

const ContestDetails = () => {
  const { id } = useParams();
  const { contest, isLoading } = useContestById(id);

  if (isLoading) return <Loader />;

  return (
    <div>
      <DetailsHeader contest={contest} />
      <DetailsBody contest={contest} />
    </div>
  );
};

export default ContestDetails;
