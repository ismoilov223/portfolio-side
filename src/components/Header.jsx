import React from "react";
import Navbar from "./component/Navbar";
import BurgerMenu from "./component/BurgerMenu";
import Hero from "./component/hero";

const Header = () => {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <Hero></Hero>
    </>
  );
};

export default Header;
