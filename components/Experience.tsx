"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="mt-3 text-gray-400">
            My internship experience and hands-on frontend development journey.
          </p>
        </div>

       <div className="relative border-l-4 border-blue-500 pl-8 space-y-10">

  {/* Internship */}
  <div className="relative">
    {/* Timeline Dot */}
    <div className="absolute -left-[43px] top-4 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-950"></div>

    <div className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">
            Software Engineer Intern
          </h3>

          <div className="flex items-center gap-2 text-blue-400 mt-2">
            <Briefcase size={18} />
            <span>Company: Nexoworx</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <MapPin size={18} />
            <span>Noida (Remote)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <Calendar size={18} />
          <span>3 Months Internship</span>
        </div>
      </div>

      <ul className="mt-8 space-y-3 text-gray-300 list-disc pl-5">
        <li>Developed responsive web applications using React, Next.js, JavaScript, TypeScript and Tailwind CSS.</li>
        <li>Built reusable UI components following modern frontend development practices.</li>
        <li>Improved website responsiveness and user experience across different screen sizes.</li>
        <li>Collaborated on real-world projects and completed assigned tasks within deadlines.</li>
      </ul>
    </div>
  </div>

  {/* Personal Projects */}
  <div className="relative">
    {/* Timeline Dot */}
    <div className="absolute -left-[43px] top-4 w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-950"></div>

    <div className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">
            Frontend Developer
          </h3>

          <div className="flex items-center gap-2 text-blue-400 mt-2">
            <Briefcase size={18} />
            <span>Personal Projects</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <MapPin size={18} />
            <span>Self Learning</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <Calendar size={18} />
          <span>2026 – Present</span>
        </div>
      </div>

      <ul className="mt-8 space-y-3 text-gray-300 list-disc pl-5">
        <li>Built 8+ responsive web applications using React, Next.js, JavaScript, TypeScript and Tailwind CSS.</li>
        <li>Developed e-commerce websites, landing pages, portfolio websites and business websites.</li>
        <li>Created reusable components and responsive user interfaces following modern frontend practices.</li>
        <li>Deployed projects on Vercel and Netlify using Git and GitHub.</li>
      </ul>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}