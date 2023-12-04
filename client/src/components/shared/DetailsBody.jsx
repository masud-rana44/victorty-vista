import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Container from "./Container";
import { formatDate, isContestEnd } from "../../utils";
import useRole from "../../hooks/useRole";

const DetailsBody = ({ contest }) => {
  const navigate = useNavigate();
  const { role, isLoading: isRoleLoading } = useRole();

  if (isRoleLoading) return <Loader />;

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mt-10">
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-2">Contest Details</h1>
            <hr className="mb-6 text-gray-500" />
            <p>{contest?.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-semibold mb-2">Rules</h1>
            <hr className="mb-6 text-gray-500" />
            <p>{contest?.instruction}</p>
          </div>
        </div>

        <div className="order-first lg:order-last w-full lg:col-span-2 bg-gray-100 p-6">
          {contest?.creator && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h1 className="font-medium mb-1">Contest creator</h1>
              <div className="flex items-center gap-x-2">
                <div>
                  <img
                    src={contest?.creator?.image}
                    alt=""
                    className="h-11 w-11 rounded-full"
                  />
                </div>
                <div className="flex flex-col italic">
                  <span className="font-medium">{contest?.creator?.name}</span>
                  <span className="text-gray-600">
                    {contest?.creator?.email}
                  </span>
                </div>
              </div>
            </div>
          )}

          {contest?.winner && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h1 className="font-medium mb-1">Contest winner</h1>
              <div className="flex items-center gap-x-2">
                <div>
                  <img
                    src={contest?.winner?.image}
                    alt=""
                    className="h-11 w-11 rounded-full"
                  />
                </div>
                <div className="flex flex-col italic">
                  <span className="font-medium">{contest?.winner?.name}</span>
                  <span className="text-gray-600">
                    {contest?.winner?.email}
                  </span>
                </div>
              </div>
            </div>
          )}

          {!isContestEnd(contest?.deadline) && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">Price: {contest?.prizeMoney}$</div>
              <div className="mb-4">
                Registration fee: Only {contest?.entryFee}$
              </div>
              <div className="mb-4">
                Deadline: {formatDate(contest?.deadline)}
              </div>
              {role === "user" && (
                <Button
                  onClick={() =>
                    navigate(`/contests/registration/${contest._id}`, {
                      state: { contest },
                    })
                  }
                  variant="contained"
                >
                  Register Now
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default DetailsBody;
