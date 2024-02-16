import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ReactLogo from "./ReactLogo";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 text-white">
      <ReactLogo type="spin" size={48} />
      <div className="hidden md:flex justify-between">
        <p className="header-link p-1 hover:underline hover:cursor-pointer">Home  | </p>
        <p className="header-link p-1 hover:underline hover:cursor-pointer">Account  | </p>
        <p className="header-link p-1 hover:underline hover:cursor-pointer">Sign In  | </p>
        <p className="header-link p-1 hover:underline hover:cursor-pointer">Sign Up   </p>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-800 bg-gray-950 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-emerald-400">
          Setting
        </h1>
        <ul className="justify-between">
          <li className="navbar-link hover:underline hover:cursor-pointer">Sign In</li>
          <li className="navbar-link hover:underline hover:cursor-pointer">Home</li>
          <li className="navbar-link hover:underline hover:cursor-pointer">Company</li>
          <li className="navbar-link hover:underline hover:cursor-pointer">Resources</li>
          <li className="navbar-link hover:underline hover:cursor-pointer">About</li>
          <li className="navbar-link hover:cursor-pointer hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
