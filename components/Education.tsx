"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2021 - 2025",
    degree: "Bachelor of Technology (B.Tech)",
    institute: "IIMT College of Engineering, Saharanpur",
   description:
    "Completed Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE), with a strong foundation in programming, web development, data structures, and software engineering.",
  },
  {
    year: "2019 - 2021",
    degree: "Senior Secondary (12th)",
    institute: "Janta Inter College , Nagal (SRE)",
    description:
      "Completed Higher Secondary Education with Physics, Chemistry, and Mathematics (PCM).",
  },
  {
    year: "2018 - 2019",
    degree: "Secondary (10th)",
    institute: "Janta Inter College , Nagal (SRE)",
    description:
      "Completed Secondary Education with Physics, Chemistry, and Mathematics (PCM).",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mb-16"
        >
          My <span className="text-blue-600">Education</span>
        </motion.h2>

        <div className="relative border-l-4 border-blue-600 ml-6">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6, delay: index * .2 }}
              viewport={{ once: true }}
              className="mb-12 ml-10 relative"
            >

              <span className="absolute -left-16 top-2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <FaGraduationCap size={20} />
              </span>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 hover:shadow-blue-500/20 transition duration-300">

                <span className="text-blue-600 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.degree}
                </h3>

                <h4 className="text-lg text-gray-500 dark:text-gray-300 mt-1">
                  {item.institute}
                </h4>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}