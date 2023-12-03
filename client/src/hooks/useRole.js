import useUser from "./useUser";

const useRole = () => {
  const { userData, isLoading } = useUser();

  const role = userData?.role;
  return { role, isLoading };
};

export default useRole;
