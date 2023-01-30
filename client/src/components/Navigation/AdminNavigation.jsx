import React from "react";
import { Link } from "react-router-dom";
const AdminNavigation = () => {
  return (
    <div className="w-1/12 md:w-[12%]  flex flex-col justify-between items-center border-r border-r-slate-700">
      <div className="pt-3  w-full flex justify-center">
        <Link to="/" className="text-rose-500 text-2xl">
          <div className="inline-block z-10">A</div>
          <div className="inline-block -z-50 transform  text-white rotate-[15deg] -translate-x-1 ">
            K
          </div>
        </Link>
      </div>

      <div className="flex-grow mt-10 space-y-5">
        <div>
          <Link to={"/admin/"} className="flex  items-center space-x-2">
            <i class="ri-dashboard-line"></i>
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </div>
        <div>
          <Link to={"/admin/media"} className="flex  items-center space-x-2">
            <i class="ri-image-line"></i>
            <span className="hidden md:inline">Media</span>
          </Link>
        </div>
        <div>
          <Link to={"/admin/posts"} className="flex  items-center space-x-2">
            <i class="ri-quill-pen-fill"></i>
            <span className="hidden md:inline">Blog Posts</span>
          </Link>
        </div>

        <div>
          <Link to={"/admin/users"} className="flex  items-center space-x-2">
            <i class="ri-user-6-line"></i>
            <span className="hidden md:inline">Users</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
