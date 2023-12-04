import Loader from "../components/shared/Loader";
import useLeaderBoard from "../hooks/useLeaderBoard";

const LeaderBoard = () => {
  const { data, isLoading } = useLeaderBoard();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1>LeaderBoard</h1>
      <div>
        {data?.map((item) => (
          <div key={item._id}>
            <div>{item?.user?.name}</div>
            <div>{item?.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
