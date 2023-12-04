import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 right-5 cursor-pointer lg:hidden flex bg-gray-200 rounded-sm p-1"
      >
        {!isOpen ? <Menu /> : <X />}
      </div>
      <div className="hidden lg:flex ">
        <Sidebar />
      </div>
      <div className="block lg:hidden ">{isOpen && <Sidebar />}</div>
      <div className="lg:pl-[260px] bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto p-10 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
