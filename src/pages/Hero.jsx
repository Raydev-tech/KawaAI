import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TrustedSection from "./TrustedSection";
import FeatureSection from "./FeatureSection";
import BuildAppSection from "./BuildAppSection";
import AIFinancialSection from "./AIFinancialSection";
import WhyKawaAI from "./WhyKawaAI"
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import NewsletterSection from "./NewsletterSection";
import FAQSection from "./FAQSection";
import Contact from "./Contact";

const Hero = () => {AIFinancialSection
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="gradient-hero py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Smarter Data <br className="hidden sm:block" />
            <span className="text-primary">Apps & AI Workflows</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Create intelligent data applications that combine <strong>security</strong> with{" "}
            <strong>flexibility</strong>. Access all your data and automate complex workflows in one unified platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="zoom-in">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium shadow-md">
              🚀 Start Today
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-20" data-aos="fade-up" data-aos-delay="200">
          {["API Gen", "Analytics", "Proactive", "AI Agents"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 transition"
            >
              ✓ {badge}
            </span>
          ))}
        </div>

        {/* Real Image Mockup */}
        <div
          className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Top Mockup Bar */}
          <div className="bg-gray-100 py-3 px-6 flex items-center gap-2 border-b border-gray-200">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <span className="ml-4 text-gray-500 text-sm">miboxai.io</span>
          </div>

          {/* Image Area */}
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
            alt="Dashboard Preview"
            className="w-full h-[500px] object-cover"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>
      <TrustedSection />
      <FeatureSection />
      <BuildAppSection />
      <AIFinancialSection />
      <WhyKawaAI />
      <AboutUs />
      <Pricing />
      <Testimonial />
      <Contact />
      <FAQSection />
      <NewsletterSection />
    </section>
  );
};

export default Hero;
