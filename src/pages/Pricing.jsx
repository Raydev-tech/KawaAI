import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const plans = [
    {
      title: "Starter",
      subtitle: "Ideal for individuals",
      price: "$29",
      period: "/month",
      features: [
        "5 projects",
        "10GB storage",
        "Email support",
        "Community access",
      ],
      button: "Choose Starter",
      popular: false,
      delay: 0,
    },
    {
      title: "Business",
      subtitle: "Perfect for growing teams",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited projects & users",
        "500GB storage",
        "24/7 premium support",
        "Custom branding",
        "Analytics dashboard",
      ],
      button: "Choose Business",
      popular: true,
      delay: 100,
    },
    {
      title: "Enterprise",
      subtitle: "For large-scale organizations",
      price: "$199",
      period: "/month",
      features: [
        "Unlimited everything",
        "Dedicated success manager",
        "Custom integrations",
        "Advanced analytics",
        "Priority support",
      ],
      button: "Contact Sales",
      popular: false,
      delay: 200,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100" id="pricing">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-500 mt-3 text-base max-w-2xl mx-auto"
        >
          Choose a plan that fits your team and scale confidently. No hidden fees.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={plan.delay}
              className={`relative bg-white rounded-2xl border-2 ${
                plan.popular
                  ? "border-blue-600 shadow-xl scale-105"
                  : "border-gray-200 shadow-md"
              } transition-transform duration-300 hover:scale-105 max-w-sm mx-auto`}
            >
              {plan.popular && (
                <div className="absolute inset-x-0 -top-3 flex justify-center">
                  <span className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-gray-500">{plan.subtitle}</p>
              </div>

              <div className="p-8">
                <div className="mb-6 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-gray-500 text-base">{plan.period}</span>
                </div>

                <ul className="space-y-3 text-gray-600 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 justify-center">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t p-6">
                <button
                  className={`w-full rounded-lg px-4 py-2 text-white font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
