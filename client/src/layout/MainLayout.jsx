import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-[72px] lg:pt-[80px] min-h-[calc(100vh-312px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
