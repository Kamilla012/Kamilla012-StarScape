import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>
      <a className="flex items-center w-[12rem] xl:mr-8" href="#hero">
        <img src={logo} width={60} alt="logo" />
        <h1 className="text-[18px] bold">StarScape</h1>
      </a>
    </div>
  );
};

export default Header;
