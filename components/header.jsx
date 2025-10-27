"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#000000] text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 invert">
          <img src="../assets/images/logo.png" alt="Logo" width={85} height={45} />
        </div>

        {/* Desktop Navigation - Always visible on desktop */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {/* <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">Home</li> */}
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">Services</li>
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">About Us</li>
            <li className="hover:text-gray-500 font_family_inter font-medium text-[14px] leading-[22px] text-center cursor-pointer">Contact Us</li>
          </ul>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex gap-3">
          <Link
            href="#"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-[#6945ED] rounded-4xl text-white hover:bg-purple-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-7 py-2.5 font_family_inter font-medium text-[15px] leading-[22px] text-center bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Icon — Mobile Only */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navigation - Only shows when hamburger is clicked */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] px-6 pt-2 pb-4" id="mobile_nav">
          <ul className="flex flex-col gap-3 font-medium">
            <li className="hover:text-gray-400 cursor-pointer font_family_inter font-medium leading-[22px]  py-2">Home</li>
            <li className="hover:text-purple-400 cursor-pointer py-2">Jobs</li>
            <li className="hover:text-purple-400 cursor-pointer py-2">About Us</li>
            <li className="hover:text-purple-400 cursor-pointer py-2">Blog</li>
          </ul>

          <div className="flex flex-col gap-2 pt-3">
            <Link
              href="#"
              className="border border-purple-500 text-purple-400 px-4 py-2 text-center text-sm rounded-lg hover:bg-purple-500 hover:text-white transition"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="bg-purple-500 px-4 py-2 text-center text-sm rounded-lg hover:bg-purple-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}