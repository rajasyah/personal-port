import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const nav = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Education",
      to: "/education",
    },
    {
      name: "Experience",
      to: "/experience",
    },
    {
      name: "Work",
      to: "/work",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <div className="bg-gray-900 h-16 w-full flex items-center justify-between">
      <div className="left pl-28">
        <h1 className="text-2xl font-bold font-title text-white drop-shadow-xl">
          Ra.Jasyah
        </h1>
      </div>
      <div className="right pr-28">
        <ul className="flex font-body text-white text-lg font-semibold gap-10">
          {nav.map((item) => (
            <li className="hover:text-red-500" key={item.name}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
