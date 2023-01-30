import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="relative flex flex-col  space-y-10 md:space-x-10 justify-center items-center w-full px-10">
      <img
        className="w-52 h-52 rounded-md object-cover hover:rotate-12 "
        src="/images/Alisa.jpg"
        alt="Alisa Khodadadi Portfolio"
      />
      <p className="font-light text-sm md:text-2xl text-center leading-7 text-slate-400 max-w-2xl">
        I like to explore new technologies and develope Web Applications. Im on
        track for learning more about Web Design, Cyber Security and DevOps. In
        my free time, I enjoy creating Youtube Videos & writting realated blog
        posts on my Website.
      </p>
      <div className="text-[12px] flex flex-col md:space-x-2 md:flex-row items-center justify-center space-y-4 md:space-y-0">
        <Link to="/blog" className="bg-teal-500 px-3 py-2 space-x-2 ">
          <i class="ri-quill-pen-fill"></i>
          <span> Read My Blog</span>
        </Link>

        <a
          href="https://www.youtube.come/Alisa-khodadadi"
          target="_blank"
          className="bg-rose-500 px-3 py-2 space-x-2 "
          rel="noreferrer"
        >
          <i class="ri-youtube-line"></i>{" "}
          <span>Watch my YOUTUBE Tutorials</span>
        </a>

        <Link className="bg-yellow-600 px-3 py-2 space-x-2 ">
          <i className="ri-copyright-line"></i> <span>Check My Resume</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
