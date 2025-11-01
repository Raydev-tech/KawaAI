import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-slate-950 text-gray-400 py-16 px-6 md:px-12 border-t border-slate-800">
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        data-aos="fade-up"
      >
        {/* Logo and description */}
        <div>
          <h2 className="text-white font-semibold text-2xl mb-4">
            Kawa<span className="text-indigo-500">AI</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Powering the next generation of businesses with AI-driven automation
            and digital intelligence. Build smarter, move faster, and scale
            efficiently with KawaAI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter</p>
          <div className="flex items-center border border-slate-700 rounded-full overflow-hidden h-10 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 px-3 outline-none text-sm text-gray-300"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 text-sm font-medium transition">
              Join
            </button>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="hover:text-indigo-400">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div
        className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        © {new Date().getFullYear()} KawaAI. All rights reserved. Designed with 💙
        by KawaAI Team.
      </div>
    </footer>
  );
}
