import useUser from "./useUser";

const useRole = () => {
  const { userData, isLoading } = useUser();

  console.log(userData);

  const role = userData?.role;
  return { role, isLoading };
};

export default useRole;
