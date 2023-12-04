import { useState } from "react";
import Banner from "./Banner";
import BestCreators from "./BestCreators";
import PopularContests from "./PopularContests";
import Winners from "./Winners";
import usePopularContests from "../../hooks/usePopularContests";

const HomePage = () => {
  const [text, setText] = useState("");
  const { refetch } = usePopularContests(text);

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} text={text} setText={setText} />
      <PopularContests text={text} />
      <Winners />
      <BestCreators />
    </div>
  );
};

export default HomePage;
