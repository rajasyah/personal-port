import React from "react";
import img from "../assets/crypto-tracker.png";
import img1 from "../assets/store.png";
import img2 from "../assets/codepen.png";
import img3 from "../assets/form.png";
import img4 from "../assets/gallery.png";
import img5 from "../assets/todo.png";

const Work = () => {
  return (
    <div className="container-page">
      <div className="w-10/12 grid grid-cols-3 gap-5">
        <div>
          <h1 className="text-gray-300 mb-2 font-body text-center font-semibold">
            Crypto Tracker
          </h1>
          <img src={img} alt="crypto-tracker" />
        </div>
        <div>
          <h1 className="text-gray-300 mb-2 font-body text-center font-semibold">
            E-commerce
          </h1>
          <img src={img1} alt="store" />
        </div>
        <div>
          <h1 className="text-gray-300 mb-2 font-body text-center font-semibold">
            Codepen Clone
          </h1>
          <img src={img2} alt="codepen" />
        </div>
        <div>
          <h1 className="text-gray-300 mb-2 font-body text-center font-semibold">
            Form validation
          </h1>
          <img src={img3} alt="form" />
        </div>
        <div>
          <h1 className="text-gray-300 mb-2 font-body text-center font-semibold">
            Gallery App
          </h1>
          <img src={img4} alt="gallery" />
        </div>
        <div>
          <h1 className="text-gray-300 mb-2 font-body text-center font-semibold">
            Todo App
          </h1>
          <img src={img5} alt="todo" />
        </div>
      </div>
    </div>
  );
};

export default Work;
