import Loader from "../../components/shared/Loader";
import useUsers from "../../hooks/useUsers";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loader />;

  console.log(users);

  return (
    <div>
      <UsersTable data={users} />
    </div>
  );
};

export default AllUsers;
