import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/shared/Loader";

const CreatorRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) return <Loader />;

  if (role !== "creator") return <Navigate to="/" />;

  return children;
};

export default CreatorRoute;
