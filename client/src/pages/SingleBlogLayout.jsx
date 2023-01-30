import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const SingleBlogLayout = () => {
  return (
    <div className="bg-slate-800 text-white">
      <Navigation />

      <div className=" min-h-screen w-full  flex flex-col lg:flex-row ">
        <div className="flex-grow w-full p-20">
          <div className=" w-full  flex flex-col mx-auto ">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-5 bg-slate-800 text-slate-400 flex justify-center items-center">
        Designed with ❤️ By Alisa Khodadadi{" "}
      </div>
    </div>
  );
};

export default SingleBlogLayout;
