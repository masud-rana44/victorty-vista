import moment from "moment";
import Countdown from "react-countdown";
import { formatDate } from "../../utils";
import { useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import Loader from "./Loader";

const DetailsHeader = ({ contest }) => {
  const isContestEnd = moment(contest?.deadline).isBefore(moment());
  const navigate = useNavigate();
  const { role, isLoading: isRoleLoading } = useRole();

  if (isRoleLoading) return <Loader />;

  return (
    <section>
      <div className="relative bg-white">
        <div className=" inset-0">
          <img
            className=" object-right w-full h-[600px] object-cover lg:object-center"
            src={contest?.image}
            alt=""
          />
        </div>


        <div className="relative px-4  mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className=" mx-auto text-left  flex items-center justify-between mt-10 mb-20">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl xl:text-5xl">
              {contest?.title}
            </h1>

            <div className=" text-gray-800  font-bold ">
              <div className="text-xl font-medium">
                {isContestEnd ? "Finished on" : "Ends in"}
              </div>
              <div className="text-4xl">
                <Countdown date={new Date(contest?.deadline)}>
                  <div className="text-2xl">
                    {formatDate(contest?.deadline).slice(0, 22)}
                  </div>
                </Countdown>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between  mx-auto gap-x-6 grid-col-2">
            <div className="flex items-center space-x-10">
              <div>
                <p className="text-4xl font-bold text-gray-800">38</p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {isContestEnd ? "Total Registered" : "Already Registered"}
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-gray-800">
                  {contest?.prizeMoney}$
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  Prize Money
                </p>
              </div>
            </div>
            <div>
              {role === "user" && (
                <button
                  onClick={() =>
                    navigate(`/contests/registration/${contest._id}`, {
                      state: { contest },
                    })
                  }
                  className="px-4 py-2 bg-gray-800 hover:opacity-75 transition text-white rounded-lg"
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsHeader;
