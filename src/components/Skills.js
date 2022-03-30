import React from "react";
import {
  DiJsBadge,
  DiCss3Full,
  DiHtml5,
  DiNodejsSmall,
  DiMongodb,
  DiReact,
  DiGithubBadge,
  DiVisualstudio,
} from "react-icons/di";

const Skills = () => {
  return (
    <div className="w-2/4 h-2/6 grid grid-cols-4 gap-5 mt-10">
      <div className="box-skills">
        <DiHtml5 className="text-red-500 text-4xl" /> Html
      </div>
      <div className="box-skills">
        <DiCss3Full className="text-blue-500 text-4xl" /> Css
      </div>
      <div className="box-skills">
        <DiJsBadge className="text-yellow-500 text-4xl" /> Javascript
      </div>
      <div className="box-skills">
        <DiNodejsSmall className="text-green-500 text-4xl" /> NodeJs
      </div>
      <div className="box-skills">
        <DiMongodb className="text-green-500 text-4xl" /> MongoDB
      </div>
      <div className="box-skills">
        <DiReact className="text-blue-500 text-4xl" /> React Js
      </div>
      <div className="box-skills">
        <DiGithubBadge className="text-gray-500 text-4xl" /> Github
      </div>
      <div className="box-skills">
        <DiVisualstudio className="text-blue-500 text-4xl" /> Vs Code
      </div>
    </div>
  );
};

export default Skills;
