import React from "react";
import Webframe from "./Webframe";

const Projectbox = ({ title, description, webUrl }) => {
  return (
    <div className="projectbox background-color p-4 shadowround ring cursor-pointer hover:shadow-[0_0_15px_#3b82f6] hover:shadow-slate-500 duration-300 ring-slate-500">
      <div className="projectbox-content">
        <h3 className="projectbox-title text-3xl text-white text-center">{title}</h3>
        <p className="projectbox-description">{description}</p>
      </div>
    </div>
  );
};

export default Projectbox;
