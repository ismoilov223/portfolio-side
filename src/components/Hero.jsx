import React from "react";
import Button from "./component/Button";
import Cve from "../CV/Shukurullo_Ismoilov_DeveloperCVe.pdf"
import Cvu from "../CV/Shukurullo_Ismoilov_DeveloperCVu.pdf"
import Cvmodal from "./component/Cvmodal";
import { drawimg } from "../images";
const Hero = () => {
  return (
    <>
      <div className="hero px-4 md:px-8 max-width flex justify-between items-center">
        <div className="text-box pt-32 pl-8 w-[75%]">
            <h1 className="text-6xl font-semibold text-white pb-5">Shukurulloh Ismoilov</h1>
            <h1 className="text-[#BCBCBC] text-3xl pl-6 pb-12">Frontend Developer</h1>
            <a className="pl-7">
            {/* <Button text={"Download CV"}></Button> */}
            <Cvmodal></Cvmodal>
            </a>
        </div>
        <div className="draw-box hidden lg:inline-block w-[50%]">
          <img className="w-full" src={drawimg} alt="" />
        </div>
      </div>
    </>
  );
};   

export default Hero;
