import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsers from "../../hooks/useUsers";

export const RoleMenu = ({ role, id, name }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const axiosSecure = useAxiosSecure();
  const { refetch } = useUsers();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUpdate = (selectedRole) => {
    if (selectedRole !== role) {
      Swal.fire({
        title: "Are you sure?",
        text: `Change ${name}'s role to ${selectedRole}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, i want!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`users/${id}`, {
            role: selectedRole,
          });

          if (res.data.acknowledged) {
            refetch();

            Swal.fire({
              title: "Success!",
              text: `${name}'s role is change to ${selectedRole}.`,
              icon: "success",
            });
          }
        }
      });
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {role}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleUpdate(role)}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleUpdate("user")}>User</MenuItem>
        <MenuItem onClick={() => handleUpdate("creator")}>Creator</MenuItem>
        <MenuItem onClick={() => handleUpdate("admin")}>Admin</MenuItem>
      </Menu>
    </div>
  );
};
