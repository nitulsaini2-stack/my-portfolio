"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
  title: "E-commerce Frontend",
  image: "/projects/project1.png",
  description:
    "A modern responsive e-commerce frontend built with Next.js. The project includes product listings, category browsing, reusable components, responsive layouts, and a clean user interface for an enhanced shopping experience.",
  tech: ["Next.js", "TypeScript", "CSS"],
  github: "https://github.com/nitulsaini2-stack/my-e-com",
  live: "https://my-e-com-frontend.vercel.app",
},
  {
  title: "Assignment project",
  image: "/projects/project2.png",
  description:
    "A modern responsive landing page built with Next.js and TypeScript. The project features reusable components, clean UI, responsive layouts, and smooth navigation to showcase an AI platform with a professional user experience.",
  tech: ["Next.js", "TypeScript"],
  github: "https://github.com/nitulsaini2-stack/botmakers-landing-page",
  live: "https://botmakers-landing-page.vercel.app",
},
  {
  title: "Homepage Replica",
  image: "/projects/project3.png",
  description:
    "A responsive homepage replica developed as an assignment using Next.js, TypeScript, and Tailwind CSS. The project recreates the original UI with modern components, responsive design, and clean code structure.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  github: "https://github.com/nitulsaini2-stack/adhishrihaan-homepage-replica",
  live: "https://adhishrihaan-homepage-replica.vercel.app",
},
 
  {
  title: "College Static Website",
  image: "/projects/project4.png",
  description:
    "A responsive college website built with React. The project features multiple pages, reusable components, smooth navigation, and a clean, mobile-friendly interface to showcase college information.",
  tech: ["React", "JavaScript", "CSS"],
  github: "https://github.com/nitulsaini2-stack/college-static-website/tree/main",
  live: "https://collegestaticwebsite-cat-3fb824.netlify.app",
},
  {
  title: "E-commerce Website",
  image: "/projects/project5.png",
  description:
    "A responsive e-commerce website built with React. The project features reusable components, product listings, category sections, a modern UI, and a mobile-friendly design for a smooth shopping experience.",
  tech: ["React", "JavaScript", "CSS"],
  github: "https://github.com/nitulsaini2-stack/E-commerce-project-using-vite/tree/main",
  live: "https://myfirstproject-e-commerce156e8.netlify.app",
},
 {
  title: "Gym website",
  image: "/projects/project6.png",
  description:
    "A responsive landing page replica built as an assignment using Next.js and TypeScript. The project recreates the original design with reusable components, responsive layouts, and a clean, modern user interface.",
  tech: ["Next.js", "TypeScript"],
  github: "https://github.com/nitulsaini2-stack/simple/tree/gym",
  live: "https://simple-two-omega.vercel.app/",
}
 
];

export default function Projects() {

 const [currentPage, setCurrentPage] = useState(1); 

const projectsPerPage = 3;

const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;

const currentProjects = projects.slice(
  indexOfFirstProject,
  indexOfLastProject
);

const totalPages = Math.ceil(projects.length / projectsPerPage);
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mb-14"
        >
          My <span className="text-blue-600">Projects</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {currentProjects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-800 shadow-xl hover:shadow-blue-400/20 transition"
            >

              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-5">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-white text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-slate-900 text-white hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="flex justify-center items-center gap-4 mt-10">

  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
  >
    Previous
  </button>

  <span className="font-semibold">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
  >
    Next
  </button>

</div>

      </div>
    </section>
  );
}