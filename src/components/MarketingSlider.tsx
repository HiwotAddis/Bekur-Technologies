"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

const marketingServices = [
  {
    title: "Email Marketing",
    description: "Boost engagement and grow your business with our email marketing services",
    icon: "/icons/email.png",
  },
  {
    title: "Content Strategy",
    description: "Boost engagement and grow your business with our email marketing services",
    icon: "/icons/content.png",
  },
  {
    title: "Email Marketing",
    description: "Boost engagement and grow your business with our email marketing services",
    icon: "/icons/digital-marketing.png",
  },
  {
    title: "Email Marketing",
    description: "Boost engagement and grow your business with our email marketing services",
    icon: "/icons/digital-marketing.png",
  },
  {
    title: "Email Marketing",
    description: "Boost engagement and grow your business with our email marketing services",
    icon: "/icons/digital-marketing.png",
  },
];

export default function MarketingSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let animation: number;
    let start = 0;
    const sliderWidth = slider.scrollWidth / 2;
    function animate() {
      start += 1;
      if (start >= sliderWidth) {
        start = 0;
      }
      slider.style.transform = `translateX(${start - sliderWidth}px)`;
      animation = requestAnimationFrame(animate);
    }
    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  // Duplicate cards for seamless looping
  const cards = [...marketingServices, ...marketingServices];

  return (
    <section className="w-full py-12 bg-transparent">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-8 px-2"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {cards.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#0B1121] rounded-xl shadow-lg min-w-[260px] max-w-[260px] h-[260px] flex flex-col items-center justify-center text-center mx-2 p-6 relative border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
              style={{ boxShadow: "0 8px 40px 0 #1e293b50" }}
            >
              {/* Glowing light at the bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-32 h-12 bg-blue-600/50 blur-2xl rounded-full z-0" />
              <div className="mb-4 flex items-center justify-center w-full z-10">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-white font-semibold text-xl mb-2 z-10">
                {service.title}
              </div>
              <div className="text-gray-400 text-sm z-10">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
