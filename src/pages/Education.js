import React from "react";

const Education = () => {
  return (
    <div className="flex justify-center items-center w-2/4 h-2/6 mt-10">
      <ul className="list-disc list-outside leading-10 text-gray-300 font-body">
        <li>
          2008 - 2014
          <span className="text-white font-bold ml-5">SD Negeri Ciputat</span>
        </li>
        <li>
          2014 - 2017
          <span className="text-white font-bold ml-5">
            SMP Negeri 1 Cikakak
          </span>
        </li>
        <li>
          2017 - 2020
          <span className="text-white font-bold ml-5">
            SMK Doa Bangsa (Rekayasa Perangkat Lunak)
          </span>
        </li>
        <li>
          2021
          <span className="text-white font-bold ml-[70px]">
            Udemy (Master Class React Js)
          </span>
        </li>
        <li>
          2022
          <span className="text-white font-bold ml-[70px]">
            Eduwork (Mern Stack)
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Education;
