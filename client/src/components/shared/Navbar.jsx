import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import Badge from "@mui/material/Badge";
import { Menu, ShoppingCart, X } from "lucide-react";
import { UserIcon } from "./UserIcon";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useAdmin } from "../hooks/useAdmin";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { isAdmin } = useAdmin();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const links = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Contact Us",
      to: "/contact",
    },
    {
      label: "Dashboard",
      to: isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home",
    },
    {
      label: "Our Menu",
      to: "/menu",
    },
    {
      label: "Our Shop",
      to: "/shop",
    },
  ];

  return (
    <header className="fixed h-[80px] w-full flex items-center justify-between bg-black/30 text-white px-2 lg:px-10 z-10">
      <Logo />

      {/* for desktop */}
      <nav className="hidden  font-medium text-[15px] uppercase lg:flex items-center space-x-6">
        <ul className="flex items-center gap-x-6">
          {links.map(
            (link) =>
              (user || link.label !== "Dashboard") && (
                <li
                  key={link.to}
                  className={pathname === link.to && "text-yellow-400"}
                >
                  <Link to={link.to}>{link.label}</Link>
                </li>
              )
          )}
        </ul>
        <Badge badgeContent={cart?.length || 0} color="primary">
          <ShoppingCart
            onClick={() => navigate("/dashboard/cart")}
            className="w-6 h-6 cursor-pointer"
          />
        </Badge>
        <UserIcon />
      </nav>

      {/* for mobile */}
      <div className="lg:hidden flex items-center space-x-4">
        <Badge badgeContent={cart?.length || 0} color="primary">
          <ShoppingCart
            onClick={() => navigate("/dashboard/cart")}
            className="w-6 h-6 cursor-pointer"
          />
        </Badge>
        <UserIcon />

        <div
          onClick={() => setIsMenuOpen((open) => !open)}
          className=" h-10 w-10 rounded-full bg-yellow-400  flex items-center justify-center cursor-pointer"
        >
          {!isMenuOpen ? (
            <Menu className="h-6 w-6" />
          ) : (
            <X className="h-6 w-6" />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute lg:hidden top-20 left-0 w-full  font-medium text-[15px] uppercase flex items-center justify-center space-x-6 bg-black/30 p-10">
          <ul className="flex flex-col items-center space-y-3 ">
            {links.map((link) => (
              <li
                key={link.to}
                className={pathname === link.to && "text-yellow-400"}
              >
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
