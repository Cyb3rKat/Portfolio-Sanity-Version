import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavigation from "../components/Navigation/AdminNavigation";

const AdminLayout = () => {
  return (
    <div className="bg-slate-800 min-h-screen w-full text-white ">
      <div className="flex flex-row min-h-screen">
        <AdminNavigation />
        <main className="flex flex-grow  mx-auto overflow-y-auto ">
          <Outlet />
        </main>
      </div>

      <div className="text-center text-xs py-5 text-slate-600 flex justify-center items-center">
        Designed with ❤️ By Alisa Khodadadi
      </div>
    </div>
  );
};

export default AdminLayout;
