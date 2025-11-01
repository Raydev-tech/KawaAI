import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="py-24 bg-gradient-to-b from-white via-indigo-50/40 to-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/40 via-transparent to-transparent blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl font-semibold text-gray-900">
              About <span className="text-indigo-600">KawaAI</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-3 max-w-2xl mx-auto">
              We’re redefining how businesses harness AI to automate workflows, unify data,
              and make intelligent decisions — faster and smarter than ever.
            </p>
          </div>

          {/* Content Section */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Image */}
            <img
              className="max-w-sm w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
              alt="KawaAI team working on AI solutions"
            />

            {/* Text Content */}
            <div>
              <h2
                className="text-3xl font-semibold text-gray-900 mb-4"
                data-aos="fade-left"
              >
                Empowering the Future with AI
              </h2>
              <p className="text-sm text-gray-600 mb-8" data-aos="fade-left" data-aos-delay="100">
                KawaAI helps enterprises bridge the gap between data and decisions. 
                Our AI-driven tools simplify analytics, automate financial processes,
                and transform how teams work together — securely and intelligently.
              </p>

              {/* Features List */}
              <div className="flex flex-col gap-8">
                {[
                  {
                    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
                    title: "Lightning-Fast Performance",
                    desc: "Optimized for speed and accuracy — experience real-time AI-powered insights.",
                  },
                  {
                    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
                    title: "Beautifully Designed Interface",
                    desc: "Clean, modern, and intuitive UI designed for productivity and clarity.",
                  },
                  {
                    img: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
                    title: "Seamless Integration",
                    desc: "Connect easily with tools like Slack, Notion, and Google Drive in seconds.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center justify-center">
                      <img src={item.img} alt={item.title} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
