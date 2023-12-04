import Banner from "./Banner";
import BestCreators from "./BestCreators";
import PopularContests from "./PopularContests";
import Winners from "./Winners";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularContests />
      <Winners />
      <BestCreators />
    </div>
  );
};

export default HomePage;
