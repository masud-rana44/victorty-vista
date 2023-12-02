import Loader from "../components/shared/Loader";
import useUser from "./useUser";

const useRole = () => {
  const { userData, isLoading } = useUser();

  if (isLoading) return <Loader />;

  const role = userData?.role;
  return role;
};

export default useRole;
