import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      © {currentYear} Hirrd™ All Rights Reserved.
      </div>
    </div>
  );
};

export default AppLayout;
