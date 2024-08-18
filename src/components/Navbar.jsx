import React from "react";
import logo from "../assets/AR-Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; // Check if this import is correct, as "fa6" might not be valid
import { FaInstagram } from "react-icons/fa6"; // Check if this import is correct, as "fa6" might not be valid

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="max-2 w-10"
          style={{ filter: "invert(1)" }}
        />
      </div>
      <div className="my-8 flex items-center justify-center gap-4 text-2xl lg:m-8">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
