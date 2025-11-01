import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cardsData = [
    {
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      text: "KawaAI transformed our financial workflow! Real-time fraud detection and intelligent insights saved us hours every week.",
    },
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      text: "A seamless AI experience! The automation features are top-notch — it's like having an extra teammate.",
    },
    {
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      text: "Intuitive, fast, and powerful. KawaAI is the perfect solution for scaling modern businesses.",
    },
    {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Morgan Green",
      handle: "@morgandigital",
      text: "We reduced our reconciliation time by 70%! Absolutely game-changing for finance automation.",
    },
  ];

  const CreateCard = ({ card }) => (
    <div
      data-aos="zoom-in-up"
      className="p-5 rounded-2xl mx-4 shadow-md bg-white/80 backdrop-blur-md border border-gray-200 hover:shadow-lg transition-all duration-300 w-72 shrink-0"
    >
      <div className="flex items-center gap-3">
        <img className="size-12 rounded-full object-cover" src={card.image} alt={card.name} />
        <div>
          <h3 className="font-semibold text-gray-800">{card.name}</h3>
          <span className="text-sm text-gray-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-4 leading-relaxed">{card.text}</p>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          data-aos="fade-up"
        >
          What Our Users Say
        </h2>
        <p
          className="text-gray-500 mt-3 text-base md:text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Trusted by professionals worldwide — see how teams are using <span className="font-semibold text-primary">KawaAI</span> to power smarter operations.
        </p>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* First row */}
      <div className="relative overflow-hidden mt-16">
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="marquee-inner flex w-[200%]">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>

      {/* Second row (reverse scroll) */}
      <div className="relative overflow-hidden mt-8">
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="marquee-inner marquee-reverse flex w-[200%]">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Testimonial;
