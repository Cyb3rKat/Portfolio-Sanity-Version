import React from "react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import { PortableText } from "@portabletext/react";
const ProjectSlide = ({ featuredImage, title, description, slug }) => {
  return (
    <>
      <h1 className="text-yellow-500 text-2xl md:text-3xl text-center ">
        {title}
      </h1>
      <div className="overflow-hidden">
        <img alt="" src={featuredImage} className="h-72 w-full object-cover" />
      </div>
      <div className="px-5   ">
        <h2 className="font-light text-yellow-500">Description</h2>
        <p className="text-slate-300  line-clamp-2">
          <PortableText value={description} />
        </p>
      </div>
      <div className="w-full text-center bg-gray-700 py-5 ">
        <Link to={`/projects/${slug}`}>
          <span className="text-rose-500">See Project Details</span>
        </Link>
      </div>
    </>
  );
};

export default ProjectSlide;
