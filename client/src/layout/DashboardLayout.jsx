import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

export const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="pl-[260px] bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
