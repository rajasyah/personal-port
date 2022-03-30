import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="container-page flex-col">
      <div className="flex gap-10">
        <h1 className="text-xl text-white hover:bg-red-900 border-2 px-2 py-1 rounded-md">
          <Link to="/about">About Me</Link>
        </h1>
        <h1 className="text-xl text-white hover:bg-red-900 border-2 px-2 py-1 rounded-md">
          <Link to="skills">My Skills</Link>
        </h1>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
