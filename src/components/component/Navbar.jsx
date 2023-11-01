import React from "react";
import { figma, github, linkedin, logo } from "../../images";

const Navbar = () => {
  return (
    <>
      <div className="navbar max-width flex items-center justify-between w-full px-[120px] py-[44px]">
        <div className="logo-box">
          <div className="text-box flex items-center gap-[12px]">
            <img src={logo} alt="" />
            <h1 className="font-medium text-white">Portfolio</h1>
          </div>
        </div>
        <div className="links-box flex items-center gap-[90px]">
          <h1 className="text-[30px] text-white font-medium">Projects</h1>
          <h1 className="text-[30px] text-white font-medium">Technologies</h1>
          <h1 className="text-[30px] text-white font-medium">About me</h1>
        </div>
        <div className="icons-box flex items-center gap-[28px]">
          <a href="https://github.com/ismoilov223" target="_blank">
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/shukurullo-ismoilov-449819263/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://www.figma.com/files/user/1057634489051799421?fuid=1057634489051799421"
            target="_blank"
          >
            <img src={figma} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
