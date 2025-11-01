import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewsletterSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      {/* Top Hero CTA Section */}
      <section
        className="flex flex-col items-center justify-center mx-auto max-w-6xl w-full text-center rounded-2xl py-24 px-6 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/banners/image-1.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        <div className="relative z-10">
          <h1
            className="text-3xl md:text-4xl font-semibold text-white max-w-2xl mx-auto leading-snug"
            data-aos="fade-up"
          >
            Empower Your Sales & Marketing with a Next-Gen AI Workforce
          </h1>

          <div
            className="h-[3px] w-32 my-3 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto"
            data-aos="zoom-in"
          ></div>

          <p
            className="text-sm md:text-base text-gray-200 max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Leverage AI Agents for real-time calling and unified multi-channel
            engagement — optimize customer interactions at scale with KawaAI.
          </p>

          <button
            className="px-8 py-2.5 mt-6 text-sm md:text-base bg-gradient-to-r from-indigo-600 to-violet-500 hover:scale-105 transition duration-300 text-white rounded-full font-medium shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="mt-20 w-full bg-slate-900 text-white py-24 flex flex-col items-center justify-center text-center px-6"
        id="newsletter"
      >
        <p
          className="text-indigo-500 font-medium uppercase tracking-wide"
          data-aos="fade-up"
        >
          Stay Updated with KawaAI
        </p>

        <h1
          className="max-w-2xl font-semibold text-4xl md:text-5xl mt-3 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Subscribe to our newsletter and get the latest AI insights & updates
        </h1>

        <p
          className="text-slate-400 mt-4 max-w-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join our growing community of innovators using KawaAI to simplify
          their digital workflow. We promise — no spam, only value.
        </p>

        <div
          className="flex items-center justify-center mt-10 border border-slate-700 rounded-full max-w-md w-full h-14 focus-within:outline focus-within:outline-indigo-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent outline-none text-white placeholder:text-slate-400 px-5 flex-1"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center font-medium">
            Subscribe
          </button>
        </div>

        <p
          className="text-xs text-slate-500 mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          By subscribing, you agree to receive updates from KawaAI. You can
          unsubscribe anytime.
        </p>
      </section>
    </>
  );
}
