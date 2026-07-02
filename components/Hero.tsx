"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 font-semibold text-xl mb-3">Hello, I'm</p>

          <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
            Nitul <br />
            <span className="text-blue-500">Saini</span>
          </h1>

          <h2 className="text-3xl text-gray-300 mt-4 font-semibold">
            MERN Stack Developer | Full Stack Developer | Frontend Developer
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-xl">
            I build modern, responsive and user-friendly web applications using
            React.js, Next.js, JavaScript, TypeScript and Tailwind CSS.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl text-white font-semibold transition hover:scale-105 shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border-2 border-blue-600 px-7 py-3 rounded-xl text-white hover:bg-blue-600 transition hover:scale-105"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/nitulsaini2-stack"
              target="_blank"
              className="text-4xl text-white hover:text-blue-500 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nitul-saini-1672ab239/"
              target="_blank"
              className="text-4xl text-white hover:text-blue-500 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid" // apna profile link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition duration-300"
            >
              <Image
                src="/naukari.png" // apna Naukri logo ka path
                alt="Naukri"
                width={38}
                height={38}
              />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30"></div>

            <Image
              src="/profile.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="relative rounded-full border-[8px] border-blue-500 object-cover w-[380px] h-[380px] shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
