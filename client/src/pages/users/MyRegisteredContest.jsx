import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import useRegisteredContest from "../../hooks/useRegisteredContest";
import Loader from "../../components/shared/Loader";
import Empty from "../../components/Shared/Empty";

const MyRegisteredContest = () => {
  const { contests, isLoading } = useRegisteredContest();
  const [sortBy, setSortBy] = useState("deadline");
  const [sortedContests, setSortedContests] = useState([]);

  useEffect(() => {
    if (!contests) return setSortedContests([]);

    const sorted = [...contests].sort((a, b) => {
      if (sortBy === "deadline") {
        if (a.deadline && b.deadline) {
          return new Date(b.deadline) - new Date(a.deadline);
        }
      } else if (sortBy === "name") {
        if (a?.title && b?.title) {
          return a.title.localeCompare(b.title);
        }
      }
      return 0;
    });

    setSortedContests(sorted);
  }, [contests, sortBy]);

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Registered Contests</h1>
      <div className="flex justify-end mb-4">
        <label htmlFor="sort" className="mr-2">
          Sort By:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded px-2 py-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="upcoming">Upcoming</option>
          <option value="name">Name</option>
        </select>
      </div>
      {contests?.length === 0 && <Empty resourceName="contest" />}
      {sortedContests?.map((contest) => (
        <div
          key={contest._id}
          className="relative border bg-gray-800 border-gray-300 break-words rounded p-4 mb-4 -z-5"
        >
          <h2 className=" text-white text-lg font-bold mb-2">
            {contest.title}
          </h2>
          <p className=" text-white  mb-2">
            Deadline: {new Date(contest.deadline).toLocaleString()}
          </p>
          <Link
            to={`/dashboard/task-submission/${contest._id}`}
            state={{ title: contest.title }}
          >
            <button className="bg-violet-500 text-white px-4 py-2 mt-2 rounded">
              Submit Task
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyRegisteredContest;
