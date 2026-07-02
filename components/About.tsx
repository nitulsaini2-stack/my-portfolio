"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Frontend Developer
            </h3>

            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Hi! I'm <span className="font-semibold">Nitul Saini</span>,
              a passionate Frontend Developer with a strong interest in
              building modern, responsive and user-friendly web applications.

              <br />
              <br />

              I have experience working with
              <span className="font-semibold">
                {" "}HTML, CSS, JavaScript, TypeScript,
                React.js, Next.js and Tailwind CSS.
              </span>

              <br />
              <br />

              I enjoy solving problems, learning new technologies,
              and creating clean, scalable web applications.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg transition"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-lg flex gap-5 items-center hover:scale-105 transition">

              <FaUserGraduate
                size={40}
                className="text-blue-600"
              />

              <div>
                <h4 className="font-bold text-xl">
                  Education
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech Graduate (2025)
                </p>
              </div>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-lg flex gap-5 items-center hover:scale-105 transition">

              <FaLaptopCode
                size={40}
                className="text-blue-600"
              />

              <div>
                <h4 className="font-bold text-xl">
                  Skills
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  React • Next.js • TypeScript • Tailwind CSS
                </p>
              </div>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-lg flex gap-5 items-center hover:scale-105 transition">

              <MdWork
                size={40}
                className="text-blue-600"
              />

              <div>
                <h4 className="font-bold text-xl">
                  Career Goal
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  Looking for Frontend Developer Opportunities
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}