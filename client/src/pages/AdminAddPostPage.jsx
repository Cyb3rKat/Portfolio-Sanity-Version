import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MyEditor from "../components/Editor/Editor";

const AdminAddPostPage = () => {
  const featureImageInput = useRef(null);

  return (
    <div className="w-full flex flex-col md:flex-row  mx-auto bg-slate-800  ">
      <div className="w-full">
        <div className=" w-full flex flex-col px-20 py-10 space-y-10">
          <div className="w-full h-full  flex justify-center items-center ">
            <input
              type="file"
              name=""
              id=""
              className="hidden"
              ref={featureImageInput}
            />
          </div>
          <input
            type="text"
            placeholder="Enter Post Title"
            className="px-2 h-20 outline-none border-b-2 text-black rounded-md "
          />
        </div>
        <div className="w-full mx-auto  flex items-center justify-center overflow-y-auto  ">
          <MyEditor />
        </div>
      </div>
      <div className=" w-full md:w-1/4 ">
        <div>
          <div>
            <p>
              Publish date: <span>1/1/1371</span>
            </p>
          </div>
          <button className="bg-green-700 px-5 py-2">Publish</button>
          <div
            className="bg-slate-300 py-5  flex flex-col items-center"
            onClick={() => {
              featureImageInput.current.click();
            }}
          >
            <i className="ri-image-add-fill text-[50px]"></i>
            <span>add featured image</span>
          </div>
          <Link to={"/admin/posts"}>Back To posts</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminAddPostPage;
