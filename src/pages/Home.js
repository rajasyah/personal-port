import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/rajasyah.png";
import doc from "../assets/rajasyah-portfolio.pdf";
import { BiDownload } from "react-icons/bi";
import { ImFacebook, ImInstagram, ImGithub } from "react-icons/im";

const Home = () => {
  return (
    <div className="container-page">
      <div>
        <p className="text-white font-body">Hello</p>
        <h1 className="text-4xl text-white font-body font-bold mb-10">
          I'm <span className="text-red-500">Rajasyah</span> Pahlevi
        </h1>
        <Link
          to={doc}
          download
          target="_blank"
          className="text-white font-bold border-white border-2 p-2 rounded-lg hover:bg-red-800"
        >
          Download CV <BiDownload className="inline mb-1 ml-2 text-2xl" />
        </Link>
      </div>
      <div>
        <img src={img} alt="rajasyah" />
      </div>
      <div>
        <p className="text-white font-body">INTRODUCTION</p>
        <h1 className="text-4xl text-red-500 font-bold mb-5">
          Frontend Developer
        </h1>
        <p className="text-gray-400 font-body ">
          I first knew and learned programming from 2017, <br /> until now I am
          still learning and developing <br /> my knowledge and I have made
          several website apps.
        </p>
        <Link className="text-red-300" to="/about">
          Learn more...
        </Link>
        <div className="flex gap-3 mt-5">
          <Link
            to=""
            target="_blank"
            className="font-bold border-blue-700 border-2 p-1 rounded-sm hover:bg-blue-800"
          >
            <ImFacebook className="inline text-xl text-blue-500 hover:text-white" />
          </Link>
          <Link
            to=""
            target="_blank"
            className="font-bold border-pink-700 border-2 p-1 rounded-sm hover:bg-pink-800"
          >
            <ImInstagram className="inline text-lg text-pink-500 hover:text-white" />
          </Link>
          <Link
            to=""
            target="_blank"
            className="font-bold border-gray-500 border-2 p-1 rounded-sm hover:bg-black"
          >
            <ImGithub className="inline text-lg text-gray-300 hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
