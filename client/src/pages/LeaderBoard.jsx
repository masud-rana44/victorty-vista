import Container from "../components/shared/Container";
import Loader from "../components/shared/Loader";
import useLeaderBoard from "../hooks/useLeaderBoard";

const LeaderBoard = () => {
  const { data, isLoading } = useLeaderBoard();

  if (isLoading) return <Loader />;

  return (
    <div className="mt-10">
      <Container>
        <h1 className="text-center text-2xl font-bold mb-10">LeaderBoard</h1>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="font-medium">User</div>
            <div className="font-medium text-right">Total Price Won</div>
          </div>
          {data?.map((item, idx) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md"
            >
              <div className="flex items-center space-x-4 ">
                <div className="text-medium">0{idx + 1}</div>
                <div>
                  <img
                    src={item?.winner[0]?.image}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium ">{item?.winner[0]?.name}</div>
                  <div className="text-neutral-500">
                    {item?.winner[0]?.email}
                  </div>
                </div>
              </div>
              <div className="font-medium">{item?.totalPrizeMoney}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoard;
