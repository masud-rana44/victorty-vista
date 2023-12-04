import Container from "../../components/shared/Container";
import Loader from "../../components/shared/Loader";
import SectionHeading from "../../components/shared/SectionHeading";
import useBestCreators from "../../hooks/useBestCreators";

const BestCreators = () => {
  const { creators, isLoading } = useBestCreators();

  if (isLoading) return <Loader />;

  console.log(creators);

  return (
    <div className="mt-20">
      <Container>
        {/* <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Best Creators</h1>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
            See All
          </button>
        </div> */}
        <SectionHeading>Best Creators</SectionHeading>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/200"
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-xl font-bold">John Doe</h1>
                  <p className="text-gray-500">1st Place</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Total Votes:</p>
                <p className="text-gray-800 font-bold">1000</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://picsum.photos/400"
                alt="contest"
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/200"
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-xl font-bold">John Doe</h1>
                  <p className="text-gray-500">1st Place</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Total Votes:</p>
                <p className="text-gray-800 font-bold">1000</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://picsum.photos/400"
                alt="contest"
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://picsum.photos/200"
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h1 className="text-xl font-bold">John Doe</h1>
                  <p className="text-gray-500">1st Place</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Total Votes:</p>
                <p className="text-gray-800 font-bold">1000</p>
              </div>
            </div>
            <div className="mt-4">
              <img
                src="https://picsum.photos/400"
                alt="contest"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestCreators;
