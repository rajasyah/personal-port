import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/rajasyah.png";
import doc from "../assets/rajasyah-portfolio.pdf";

const Home = () => {
  return (
    <div className="container-page">
      <div>
        <p className="text-white font-body">Hello</p>
        <h1 className="text-4xl text-white font-body font-bold mb-5">
          I'm <span className="text-red-500">Rajasyah</span> Pahlevi
        </h1>
        <Link
          to={doc}
          download
          target="_blank"
          className="text-white font-bold border-white border-2 p-2 rounded-lg hover:bg-red-800"
        >
          Download CV
        </Link>
      </div>
      <div>
        <img src={img} alt="rajasyah" />
      </div>
      <div>
        <h1 className="text-4xl text-red-500 font-bold">Frontend Developer</h1>
      </div>
    </div>
  );
};

export default Home;
