import { useState } from "react";
import { figma, github, linkedin, logo } from "../images";
export default function BurgerMenu() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className="w-full bg-transparent">
      <div className="justify-between px-4 mx-auto max-width md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="text-box flex items-center gap-[12px]">
            <img src={logo} alt="" />
            <h1 className="text-xl sm:text-[30px] font-medium text-white">Portfolio</h1>
          </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-xl sm:text-[30px] text-white font-medium duration-150 hover:text-[#7abce7]">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-xl sm:text-[30px] text-white font-medium duration-150 hover:text-[#7abce7]">
                <a href="#technologies">Technologies</a>
              </li>
              <li className="text-xl sm:text-[30px] text-white font-medium duration-150 hover:text-[#7abce7]">
                <a href="#aboutme">About me</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2  md:flex items-center gap-[28px]">
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
    </nav>
  );
}
