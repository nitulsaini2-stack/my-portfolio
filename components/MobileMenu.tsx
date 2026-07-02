"use client";

import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 shadow-lg">

      <div className="flex flex-col text-center">

        <Link
          href="#home"
          className="py-4 hover:bg-blue-500 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>

        <Link
          href="#about"
          className="py-4 hover:bg-blue-500 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>

        <Link
          href="#skills"
          className="py-4 hover:bg-blue-500 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>

        <Link
          href="#projects"
          className="py-4 hover:bg-blue-500 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>

        <Link
          href="#contact"
          className="py-4 hover:bg-blue-500 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>

      </div>
    </div>
  );
}