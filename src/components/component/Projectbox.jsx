import React from "react";
import Webframe from "./Webframe";

const Projectbox = ({ title, description, webUrl }) => {
  return (
    <div className="projectbox">
      <Webframe wurl={webUrl}></Webframe>
      <div className="projectbox-content">
        <h3 className="projectbox-title">{title}</h3>
        <p className="projectbox-description">{description}</p>
      </div>
    </div>
  );
};

export default Projectbox;
