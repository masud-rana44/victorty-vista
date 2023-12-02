import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const UserIcon = () => {
  const { user, logoutUser } = useAuth();

  if (user) {
    return (
      <div className="cursor-pointer flex items-center space-x-2">
        <button onClick={logoutUser}>Logout</button>
        <img
          src={user.photoURL}
          alt={`Photo of `}
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="cursor-pointer flex items-center space-x-2">
      <Link to="/login">Login</Link>
      <UserCircle className="w-6 h-6" />
    </div>
  );
};
