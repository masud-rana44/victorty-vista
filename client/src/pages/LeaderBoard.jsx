import Container from "../components/shared/Container";
import Loader from "../components/shared/Loader";
import useUsers from "../hooks/useUsers";

const LeaderBoard = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loader />;

  return (
    <div>
      <Container>
        <h1 className="text-center text-2xl font-bold mb-10">LeaderBoard</h1>
        <div className="space-y-6">
          {users?.map((item, idx) => (
            <div key={item._id} className="flex items-center space-x-10">
              <div>{idx + 1}</div>
              <div>
                <img
                  src={item?.image}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div>
                <div className="font-medium ">{item?.name}</div>
                <div className="text-neutral-500">{item?.email}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoard;
