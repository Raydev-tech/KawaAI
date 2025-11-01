import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiGooglecloud,
  SiNotion,
  SiSlack,
  SiDropbox,
  SiSalesforce,
  SiZoom,
  SiAsana,
  SiMicrobit,
  SiJira,
  SiGmail,
  SiAmazon,
  SiMeta,
} from "react-icons/si";
import { Brain } from "lucide-react";

const icons = [
  { icon: SiGooglecloud, color: "text-blue-500" },
  { icon: SiSlack, color: "text-purple-500" },
  { icon: SiDropbox, color: "text-sky-500" },
  { icon: SiSalesforce, color: "text-cyan-500" },
  { icon: SiZoom, color: "text-blue-400" },
  { icon: SiAsana, color: "text-pink-500" },
  { icon: SiNotion, color: "text-gray-700" },
  { icon: SiJira, color: "text-blue-600" },
  { icon: SiMicrobit, color: "text-amber-500" },
  { icon: SiGmail, color: "text-red-500" },
  { icon: SiMeta, color: "text-orange-500" },
  { icon: SiAmazon, color: "text-yellow-500" },
];

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/40 via-transparent to-white blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Access all your data, build AI agents and{" "}
            <span className="text-indigo-600">automate workflows</span> in one
            platform
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Search across all your structured and unstructured data sources:
            databases, Drive, Slack, Notion, PDFs, and more. Combine them with
            real-time insights and let AI handle the complexity.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE — Animated Icon Grid */}
        <div
          className="relative bg-gradient-to-b from-white to-indigo-50 rounded-3xl shadow-lg border border-gray-100 p-8 flex flex-col items-center"
          data-aos="fade-left"
        >
          <div className="grid grid-cols-4 gap-6 mb-8">
            {icons.map(({ icon: Icon, color }, index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-md hover:shadow-lg transition transform hover:scale-110 rotate-slow`}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                <Icon className={`${color} w-7 h-7`} />
              </div>
            ))}
          </div>

          {/* Center Brain Icon */}
          <div
            className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl w-24 h-24 flex items-center justify-center shadow-xl animate-spin-slow"
            data-aos="zoom-in-up"
            data-aos-delay="800"
          >
            <Brain className="text-white w-10 h-10" />
          </div>

          {/* Soft Glow */}
          <div className="absolute -bottom-4 inset-x-0 mx-auto w-40 h-40 bg-indigo-500/30 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
