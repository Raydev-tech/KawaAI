import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-gray-800 py-20 px-6 md:px-16"
    >
      {/* Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-indigo-600 font-semibold uppercase tracking-widest">
          Contact Us
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
          Let’s Build the Future with <span className="text-indigo-600">AI</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Have questions, partnership ideas, or want a demo of KawaAI?
          We’d love to hear from you. Fill out the form below or reach out directly.
        </p>
      </div>

      {/* Main content */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        data-aos="fade-up"
      >
        {/* Contact Info */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Get in touch
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-600 text-white p-3 rounded-xl">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <p className="text-gray-600 text-sm">support@kawaai.tech</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-indigo-600 text-white p-3 rounded-xl">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-medium text-slate-900">Phone</p>
                <p className="text-gray-600 text-sm">+234 800 000 0000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-indigo-600 text-white p-3 rounded-xl">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-medium text-slate-900">Address</p>
                <p className="text-gray-600 text-sm">
                  Lagos, Nigeria — Remote Worldwide 🌍
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-indigo-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-indigo-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 outline-none focus:border-indigo-500 transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
