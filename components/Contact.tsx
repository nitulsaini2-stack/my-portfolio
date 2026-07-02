"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
  .sendForm(
    "service_26jqd68",
    "template_83gioaf",
    form.current,
    "EZCBArFRSk25jaII2"
  )
      .then(() => {
        setLoading(false);
        setMessage("✅ Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        setLoading(false);
        setMessage("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-100 dark:bg-slate-950"
    >
      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold mb-12"
        >
          Contact <span className="text-blue-600">Me</span>
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 mb-5 rounded-lg border outline-none dark:bg-slate-800"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 mb-5 rounded-lg border outline-none dark:bg-slate-800"
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full p-4 mb-6 rounded-lg border outline-none dark:bg-slate-800"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p className="mt-5 text-center font-semibold">
              {message}
            </p>
          )}

        </motion.form>

      </div>
    </section>
  );
}