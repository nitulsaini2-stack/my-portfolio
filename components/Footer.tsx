"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaInstagram,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">Nitul Saini</h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Frontend Developer passionate about building modern, responsive
              and user-friendly web applications using React, Next.js, JavaScript, 
              TypeScript and Tailwind CSS.
            </p>
          </div>
          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            {/* GitHub */}
            <a
              href="https://github.com/nitulsaini2-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nitul-saini-1672ab239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/nitul_saini_2020"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/NitulSaini"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaFacebook />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/NitulSaini"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaTelegram />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nitulsaini2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-900 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-gray-400 text-center">
            © {year} Nitul Saini. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full transition duration-300"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
