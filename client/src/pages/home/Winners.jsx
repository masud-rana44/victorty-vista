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
            <div key={contest._id} className="relative bg-gray-100 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
                <div className="absolute top-10 left-[10%] flex flex-col items-center text-center">
                  <h2 className="text-xl text-white text-center font-semibold p-1">
                    {contest?.title}
                  </h2>
                  <img
                    src={contest?.winnerInfo?.image}
                    alt="avatar"
                    className="w-12 h-12 rounded-full mx-auto text-center"
                  />
                  <div className="ml-4  text-white text-center">
                    <h1 className="text-xl font-bold">
                      {contest?.winnerInfo?.name}
                    </h1>
                    <p className="text-gray-400 font-medium">
                      {contest?.winnerInfo?.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={contest?.image}
                  alt="contest"
                  className="w-full h-[260px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Winners;
