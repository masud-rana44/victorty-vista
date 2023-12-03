import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { StatusMenu } from "./StatusMenu";

import { deleteContest } from "../../api/contest";
import useContestForAdmin from "../../hooks/useContestsForAdmin";
import { Link } from "react-router-dom";

export default function ContestsTable({ data }) {
  const { refetch } = useContestForAdmin();

  const handleDeleteUser = (id) => {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ color: "#fff" }} className="bg-violet-600">
          <TableRow className="text-white font-medium">
            <TableCell sx={{ color: "#fff", fontWeight: "600" }}>No</TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
              IMAGE
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
              TITLE
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
              DEADLINE
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
              STATUS
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
              ACTIONS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className=" font-medium">{index + 1}</div>
              </TableCell>
              <TableCell component="th" scope="row">
                <img
                  src={row.image}
                  className="h-12 w-12 object-cover rounded-full"
                />
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                className="flex flex-col gap-1"
              >
                <div className="font-semibold">{row.title}</div>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                className="flex flex-col gap-1"
              >
                <div>{row.deadline}</div>
              </TableCell>
              <TableCell>
                <StatusMenu
                  status={row.status || "pending"}
                  id={row._id}
                  name={row.title}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Link to={`/dashboard/contests/update/${row._id}`}>
                    <div className="px-2 py-3 rounded-sm bg-blue-600 w-12 flex items-center justify-center text-white hover:opacity-75 transition cursor-pointer">
                      <Edit size={18} />
                    </div>
                  </Link>
                  <div
                    onClick={() => handleDeleteUser(row._id)}
                    className="px-2 py-3 rounded-sm bg-red-600 w-12 flex items-center justify-center text-white hover:opacity-75 transition cursor-pointer"
                  >
                    <Trash2 size={18} />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
