import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center w-full justify-around py-8">
      <div>
        <Link to="/" className="text-rose-500 text-2xl">
          <div className="inline-block z-10">A</div>
          <div className="inline-block -z-50 transform  text-white rotate-[15deg] -translate-x-1 ">
            K
          </div>
        </Link>
      </div>
      <ul className="flex space-x-2 text-sm">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact-me">Contact Me</NavLink>
        </li>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
