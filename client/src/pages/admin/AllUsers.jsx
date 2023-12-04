import Loader from "../../components/shared/Loader";
import SectionHeading from "../../components/shared/SectionHeading";
import useUsers from "../../hooks/useUsers";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loader />;

  return (
    <div>
      <SectionHeading>All Users</SectionHeading>
      <UsersTable data={users} />
    </div>
  );
};

export default AllUsers;
