import {
  Book,
  CalendarCheck2,
  CalendarDays,
  Home,
  Mail,
  Menu,
  MessageSquare,
  ShoppingBag,
  ShoppingCart,
  Users2,
  Utensils,
  Wallet,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Loader from "../shared/Loader";
import useRole from "../../hooks/useRole.js";
import Logo from "../shared/Logo";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { role, isLoading } = useRole();

  const isAdmin = role === "admin";

  if (isLoading) return <Loader />;

  const userLinks = [
    {
      label: "All Users",
      to: "/dashboard/all-users",
      Icon: Home,
    },
    {
      label: "All Contests",
      to: "/dashboard/all-contests",
      Icon: CalendarDays,
    },
  ];

  const adminLinks = [
    {
      label: "All Users",
      to: "/dashboard/all-users",
      Icon: Home,
    },
    {
      label: "All Contests",
      to: "/dashboard/all-contests",
      Icon: CalendarDays,
    },
  ];

  const navLinks = [
    {
      label: "Home",
      to: "/",
      Icon: Home,
    },
    {
      label: "Our Menu",
      to: "/menu",
      Icon: Menu,
    },
    {
      label: "Our Shop",
      to: "/shop",
      Icon: ShoppingBag,
    },
    {
      label: "Contact Us",
      to: "/contact",
      Icon: Mail,
    },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="min-h-screen w-[260px]  fixed top-0 left-0 bg-primary py-8">
      <div className="text-center w-full">
        <Logo />
      </div>
      <nav className="mt-8">
        <ul className="flex flex-col space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={`uppercase font-medium flex items-center space-x-4 hover:text-gray-200 transition px-8 py-2 ${
                  pathname === link.to && "bg-white hover:text-black"
                }`}
              >
                <link.Icon className="h-6 w-6" /> <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <hr className="my-6" />
        <ul className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="uppercase font-medium flex items-center px-8 space-x-4 hover:text-gray-200 transition"
              >
                <link.Icon className="h-6 w-6" /> <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
