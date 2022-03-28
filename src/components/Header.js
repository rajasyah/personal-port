import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-900 h-16 w-full flex items-center justify-between fixed">
      <div className="left pl-28">
        <h1 className="text-2xl font-bold font-title text-white drop-shadow-xl">
          Ra.Jasyah
        </h1>
      </div>
      <div className="right pr-28">
        <ul className="flex font-body text-white text-lg font-semibold gap-10">
          <li className="text-yellow-300">Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
