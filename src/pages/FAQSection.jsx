import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "What is KawaAI?",
      answer:
        "KawaAI is an intelligent automation platform designed to help businesses streamline financial and operational workflows using AI technology.",
    },
    {
      question: "Is KawaAI suitable for small businesses?",
      answer:
        "Absolutely! KawaAI offers scalable tools suitable for startups, freelancers, and enterprises looking to automate their processes efficiently.",
    },
    {
      question: "How secure is KawaAI?",
      answer:
        "We take security seriously. All data is encrypted in transit and at rest, following industry best practices and compliance standards.",
    },
    {
      question: "Can I integrate KawaAI with my existing tools?",
      answer:
        "Yes. KawaAI provides flexible API integrations with popular platforms such as Slack, Notion, and Google Workspace.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section
        className="w-full bg-gray-50 py-24 px-6 md:px-12"
        id="faq"
      >
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12"
          data-aos="fade-up"
        >
          {/* Left Image */}
          <img
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
            alt="FAQ Illustration"
          />

          {/* Right FAQ Content */}
          <div className="w-full md:w-1/2">
            <p
              className="text-indigo-600 font-semibold uppercase tracking-wide mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              FAQ
            </p>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Everything you need to know about how KawaAI helps you automate,
              optimize, and grow your digital operations effortlessly.
            </p>

            {/* FAQ Items */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                data-aos="fade-up"
                data-aos-delay={250 + index * 100}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-transform duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#4F46E5"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm text-gray-600 transition-all duration-500 ease-in-out max-w-md ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 pt-3"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
