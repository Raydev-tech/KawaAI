import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiHiveBlockchain, SiCashapp, SiGoogleanalytics, SiChartdotjs } from "react-icons/si";

const WhyKawaAI = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const features = [
    {
      title: "Fraud Prevention",
      desc: "Identify and prevent fraudulent transactions using AI-powered anomaly detection and behavioral insights.",
      icon: <SiHiveBlockchain className="text-indigo-600 text-4xl" />,
    },
    {
      title: "Cash Reconciliation",
      desc: "Automate financial reconciliation to ensure every transaction is accurately matched and verified.",
      icon: <SiCashapp className="text-indigo-600 text-4xl" />,
    },
    {
      title: "Investment Intelligence",
      desc: "Empower your investment teams with real-time market data and predictive analytics for better decisions.",
      icon: <SiGoogleanalytics className="text-indigo-600 text-4xl" />,
    },
    {
      title: "Order Matching",
      desc: "Streamline trade matching with AI precision, minimizing errors and maximizing execution speed.",
      icon: <SiChartdotjs className="text-indigo-600 text-4xl" />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f9fbff] via-white to-[#eef2ff] overflow-hidden">
      {/* Background blur accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100/50 blur-3xl rounded-full opacity-50 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/50 blur-3xl rounded-full opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h3 className="text-sm font-medium text-indigo-600 uppercase tracking-wide mb-2">
            Technology
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            There are hundreds of analytics tools out there.{" "}
            <span className="text-indigo-600">Why KAWA?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            KAWA combines intelligent automation, deep financial analytics, and adaptive AI
            models to deliver unmatched operational efficiency. Our suite ensures accuracy,
            compliance, and speed for modern enterprises.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-indigo-50 rounded-2xl p-4 mb-5 shadow-inner">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKawaAI;
