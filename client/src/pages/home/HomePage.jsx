import Banner from "./Banner";
import BestCreators from "./BestCreators";
import PopularContests from "./PopularContests";
import Winners from "./Winners";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <BestCreators />
      <PopularContests />
      <Winners />
    </div>
  );
};

export default HomePage;
