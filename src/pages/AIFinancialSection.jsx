import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiHiveBlockchain, SiGoogleanalytics, SiBitcoinsv, SiCashapp } from "react-icons/si";

const AIFinancialSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#f7f9ff] via-white to-[#eef2ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reimagining workflows <br /> across the enterprise
          </h2>
          <div className="flex justify-center gap-4 mt-4 text-sm font-medium text-gray-600">
            <span className="px-4 py-2 bg-white border rounded-full shadow-sm hover:bg-gray-50 cursor-pointer transition">
              Finance
            </span>
            <span className="px-4 py-2 bg-white border rounded-full shadow-sm hover:bg-gray-50 cursor-pointer transition">
              Insurance
            </span>
            <span className="px-4 py-2 bg-white border rounded-full shadow-sm hover:bg-gray-50 cursor-pointer transition">
              Retail
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Text */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              AI-Powered Financial Operations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kova automates data reconciliation, regulatory reporting, and risk
              management—ensuring accuracy, efficiency, and compliance.
              Streamline document classification, transform data, and optimize
              workflows for seamless operations.
            </p>
          </div>

          {/* Right Visual Card */}
          <div
            data-aos="fade-left"
            className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-10 flex flex-col items-center justify-center"
          >
            {/* Central AI Icon */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-500 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition">
              <SiHiveBlockchain className="text-5xl" />
            </div>

            {/* Floating Badges */}
            <div
              className="absolute -top-6 left-6 bg-white border shadow-md px-4 py-2 rounded-full text-sm text-gray-700"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Fraud Prevention
            </div>
            <div
              className="absolute -bottom-6 right-6 bg-white border shadow-md px-4 py-2 rounded-full text-sm text-gray-700"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Order Matching
            </div>
            <div
              className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white border shadow-md px-4 py-2 rounded-full text-sm text-gray-700"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Cash Reconciliation
            </div>
            <div
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white border shadow-md px-4 py-2 rounded-full text-sm text-gray-700"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              Investment Insights
            </div>
          </div>
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
};

export default AIFinancialSection;
