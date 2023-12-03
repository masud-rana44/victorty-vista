import { BiEdit, BiSolidEyedropper, BiTrash } from "react-icons/bi";

const CreatedContestTable = ({ data }) => {
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
                <td>{contest.status}</td>
              </td>
              <th className="flex items-center justify-end space-x-1">
                <button className="btn btn-outline btn-primary btn-sm">
                  <BiEdit />
                </button>
                <button className="btn btn-outline btn-error btn-sm">
                  <BiTrash />
                </button>
                <button className="btn btn-outline btn-success btn-sm">
                  <BiSolidEyedropper />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreatedContestTable;
