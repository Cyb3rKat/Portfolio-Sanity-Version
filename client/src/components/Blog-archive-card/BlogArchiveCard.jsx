import React from "react";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";

const BlogArchiveCard = ({ description, title, featuredImage, slug }) => {
  return (
    <Link to={`${slug}`}>
      <div className="bg-slate-500 w-full min-h-[200px] p-4 space-y-2 bg-opacity-30 flex flex-col rounded-md hover:shadow-2xl ">
        <div className=" max-w-full overflow-hidden">
          <img
            src={featuredImage}
            alt=""
            className="rounded object-cover h-60 lg max-w-full hover:scale-150 hover:hue-rotate-180 duration-700  w-full "
          />
        </div>
        <div className="">
          <h2 className="text-yellow-500">{title}</h2>
          {/* <p className="text-slate-400 text-sm ">{description}</p> */}
          <div className="text-slate-400 line-clamp-3 text-sm leading-3 mt-4">
            <PortableText value={description} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogArchiveCard;
