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
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {contests?.map((contest) => (
            <div key={contest._id} className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={contest?.winnerInfo?.image}
                    alt="avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h1 className="text-xl font-bold">
                      {contest?.winnerInfo?.name}
                    </h1>
                    <p className="text-gray-500">
                      {contest?.winnerInfo?.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={contest?.image}
                  alt="contest"
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold p-1">{contest?.title}</h2>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Winners;
