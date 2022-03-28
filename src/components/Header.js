import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 h-16 w-full flex items-center justify-between">
      <div className="left pl-28">
        <h1 className="text-2xl font-bold font-title text-white drop-shadow-xl">
          Ra.Jasyah
        </h1>
      </div>
      <div className="right pr-28">
        <ul className="flex font-body text-white text-lg font-semibold gap-10">
          <li className="text-yellow-300">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
