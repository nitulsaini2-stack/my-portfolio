"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML, HTML5",
    percentage: 95,
  },
  {
    name: "CSS",
    percentage: 90,
  },
  {
    name: "JavaScript",
    percentage: 90,
  },
  {
    name: "Bootstrap",
    percentage: 90,
  },
  {
    name: "TypeScript",
    percentage: 80,
  },
  {
    name: "React.js",
    percentage: 90,
  },
  {
    name: "Next.js",
    percentage: 85,
  },
  {
    name: "Tailwind CSS",
    percentage: 90,
  },
  {
    name: "Node.js & Express.js",
    percentage: 80,
  },
  {
    name: "MySQL & MongoDB",
    percentage: 75,
  },  
  {
    name: "Git & GitHub",
    percentage: 80,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          My <span className="text-blue-600">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >

              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>

                <span className="font-bold text-blue-600">
                  {skill.percentage}%
                </span>
              </div>

              <div className="w-full h-3 bg-gray-300 dark:bg-slate-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                  className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}