import Swal from "sweetalert2";
import { deleteContest } from "../../api/contest";
import useContestByCreator from "../../hooks/useContestByCreator";
import { Link, useLocation } from "react-router-dom";
import { Eye, FileEdit, Trash } from "lucide-react";

const CreatedContestTable = ({ data }) => {
  const { refetch } = useContestByCreator();
  const location = useLocation();

  const handleDeleteContests = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteContest(id);
        if (res?.acknowledged) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Contest deleted",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto bg-white">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((contest, idx) => (
            <tr key={contest._id}>
              <th>
                <span>{idx + 1}</span>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={contest.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{contest.title}</div>
              </td>

              <td>
                <td>{contest.deadline}</td>
              </td>
              <td>
                {contest.status === "pending" ? (
                  <div className="badge badge-secondary badge-outline">
                    {contest.status}
                  </div>
                ) : (
                  <div className="badge badge-accent badge-outline">
                    {contest.status}
                  </div>
                )}
              </td>
              <th className="flex items-center justify-end space-x-1">
                {contest.status === "pending" ? (
                  <>
                    <Link
                      to={`/dashboard/contests/update/${contest._id}`}
                      state={{ from: location }}
                    >
                      <button className="btn btn-outline btn-primary btn-sm">
                        <FileEdit className="h-6 w-6" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteContests(contest._id)}
                      className="btn btn-outline btn-error btn-sm"
                    >
                      <Trash className="h-6 w-6" />
                    </button>
                  </>
                ) : (
                  <Link to={`/dashboard/contests-submission/${contest._id}`}>
                    <button className="btn btn-outline btn-success btn-sm">
                      <Eye className="h-6 w-6" />
                    </button>
                  </Link>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatedContestTable;
