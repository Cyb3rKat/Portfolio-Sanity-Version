import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Layout = () => {
  return (
    <div className="bg-slate-800 min-h-screen w-full text-white">
      <div className=" container mx-auto h-screen flex flex-col ">
        <Navigation />
        <main className="flex flex-grow overflow-y-auto">
          <Outlet />
        </main>
        <div className="text-center text-xs py-5 text-slate-600 flex justify-center items-center">
          {" "}
          Designed with ❤️ By Alisa Khodadadi{" "}
        </div>
      </div>
    </div>
  );
};

export default Layout;
