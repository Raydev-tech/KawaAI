import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartPie, FaDatabase, FaRobot, FaPlay } from "react-icons/fa";

const BuildAppSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/40 via-transparent to-white blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div data-aos="fade-right">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Build data applications with a <br className="hidden sm:block" />
              <span className="text-indigo-600">simple prompt</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Turn plain text into data-powered apps. Connect databases, visualize reports,
              and automate actions using only natural language. AI handles everything — from
              logic building to deployment.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition">
              Explore Features
            </button>
          </div>

          {/* RIGHT DASHBOARD MOCKUP */}
          <div
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 relative"
            data-aos="fade-left"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaRobot className="text-indigo-500" /> AI Workflow Builder
              </h4>
              <button className="bg-indigo-100 text-indigo-600 px-3 py-1 text-sm rounded-md hover:bg-indigo-200 transition">
                Run
              </button>
            </div>

            {/* Chart Area */}
            <div className="bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-xl p-4 shadow-inner mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-700 font-medium flex items-center gap-2">
                  <FaChartPie className="text-indigo-500" /> Sales Insights
                </p>
                <span className="text-sm text-gray-500">Live</span>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9043/9043720.png"
                alt="Chart"
                className="w-full h-40 object-contain"
              />
            </div>

            {/* Data Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg text-center">
                <FaDatabase className="mx-auto text-indigo-500 mb-2" />
                <p className="text-sm text-gray-600">PostgreSQL</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <FaChartPie className="mx-auto text-blue-500 mb-2" />
                <p className="text-sm text-gray-600">Analytics</p>
              </div>
              <div className="p-3 bg-violet-50 rounded-lg text-center">
                <FaPlay className="mx-auto text-violet-500 mb-2" />
                <p className="text-sm text-gray-600">Automation</p>
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-700 font-medium mb-2">AI Output:</p>
              <div className="text-sm text-gray-600 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                ✅ Data pipeline created successfully.<br />
                ✅ Dashboard generated with 4 widgets.<br />
                ⚙️ Running AI automation...
              </div>
            </div>

            {/* Soft Glow */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-indigo-300/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAppSection;
