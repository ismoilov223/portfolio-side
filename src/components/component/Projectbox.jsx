import React from "react";
import Webframe from "./Webframe";

const Projectbox = ({ title, description, webUrl }) => {
  return (
    <div className="projectbox md:w-2/5 background-color p-4 shadowround ring hover:shadow-[0_0_15px_#3b82f6] hover:shadow-slate-500 duration-300 ring-slate-500">
      <div className="projectbox-content md:py-2 ">
      <iframe src={webUrl} class="w-full h-[300px] rounded-lg " loading="lazy"></iframe>

        <h3 className="projectbox-title text-3xl font-semibold text-white text-center mt-4">{title}</h3>
        <hr className="border-slate-500 my-3 w-3/5 mx-auto" />
        <p className="projectbox-description text-white text-left mb-3 text-xl">{description}</p>
        <a href={webUrl} target="_blank" rel="noopener noreferrer">
        <button className=" text-white bg-[#13ADC7] p-2 rounded-full px-5">Look it up</button>
        </a>
      </div>
    </div>
  );
};

export default Projectbox;
