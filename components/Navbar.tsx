"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl"
    >

      <div className="w-full h-16">

        <nav className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">


          {/* Logo */}
          <Link href="#home">
            <h1 className="text-3xl font-extrabold tracking-wide cursor-pointer">
              <span className="text-white">Nitul</span>{" "}
              <span className="text-blue-500">Saini</span>
            </h1>
          </Link>



          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative text-gray-300 font-medium transition duration-300 hover:text-blue-500 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

                </Link>
              </li>
            ))}

          </ul>



          {/* Right Side */}
          <div className="flex items-center gap-4">

            <ThemeToggle />

            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold transition duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Resume
            </a>


            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>


          </div>


        </nav>

      </div>


      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </motion.header>
  );
}