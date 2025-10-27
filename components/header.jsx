"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 relative">
        
        {/* ✅ Logo section — white background with real colors */}
        <div className="flex items-center gap-2 relative z-50 bg-white rounded-lg px-2 py-1">
          <Image
            src="/assets/images/logo.png" // make sure this file is in /public/assets/images/
            alt="Logo"
            width={90}
            height={45}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-10 text-sm font-medium">
            <li className="hover:text-gray-500 cursor-pointer">Services</li>
            <li className="hover:text-gray-500 cursor-pointer">About Us</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            href="#"
            className="px-7 py-2.5 text-[15px] bg-[#6945ED] rounded-4xl text-white hover:bg-purple-500 transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-7 py-2.5 text-[15px] bg-white rounded-4xl text-[#6945ED] hover:bg-purple-500 hover:text-white transition"
          >
            Register
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-3xl z-50 relative"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] px-6 pt-2 pb-4 absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col gap-3 font-medium">
            <li className="hover:text-gray-400 cursor-pointer py-2">Home</li>
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
