import { Link } from "react-router-dom";

const ContestCard = ({ contest }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={contest?.image}
          alt="Shoes"
          className="h-[240px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{contest?.title}</h2>
        <p>{contest?.description.slice(0, 70)}...</p>
        <div className="card-actions justify-between">
          <div className="font-medium">
            <p>Type: {contest?.type}</p>
            <p>Total Registration: {contest?.participantsCount}</p>
          </div>
          <Link to={`/contests/${contest?._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
