import React from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../store/Slices/api/apiSlice";

const AdminBlogArchivePage = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  console.log(posts.data);

  return (
    <div className="flex flex-col justify-center items-center w-full p-10 text-sm bg-white">
      <div className="bg-gray-600 w-full h-16 flex justify-between items-center px-10">
        <div className="relative">
          <i className="ri-search-line text-gray-800 absolute left-2 top-[6px] "></i>
          <input
            type="text"
            placeholder="Search Post"
            className="px-7 h-8 outline-none text-black rounded-lg"
          />
        </div>
        <div>
          <button className="bg-rose-600 px-5   py-2 rounded-md hover:bg-rose-700">
            <Link to={"/admin/posts/addpost"}>Add Post</Link>
          </button>
        </div>
      </div>
      <table className=" w-full table-auto">
        <thead className="bg-gray-800 table-auto ">
          <tr className="table-auto">
            <th className="border-r border-red-100">Title</th>
            <th className="border-r border-red-100">Slug</th>
            <th className="border-r border-red-100">Status</th>
            <th className="border-r border-red-100 ">Featured Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.data &&
            posts.data.map((post) => {
              return (
                <tr
                  className="text-center font-light mt-2  odd:bg-gray-400 even:bg-gray-800 even:text-white text-black "
                  key={post._id}
                >
                  <td className="border-r border-blue-200">{post.title}</td>
                  <td className="border-r border-blue-200">sample Slug</td>
                  <td className="border-r border-blue-200">Published</td>
                  <td className="border-r border-blue-200 flex items-center justify-center">
                    <img
                      src={post.featuredImage}
                      alt=""
                      className="max-w-[100px]"
                    />
                  </td>
                  <td className="">
                    <button>
                      <i class="ri-edit-line  bg-yellow-500 text-white px-2 py-2"></i>
                    </button>
                    <button>
                      <i className="ri-delete-bin-line bg-rose-500 text-white px-2 py-2"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBlogArchivePage;
