import React from "react";

const showcaseData = [
  { img: "/images/portfolio/portfolio1.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio2.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio3.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio4.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio5.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio6.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio7.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio8.png", fb: true, views: "300k" },
  { img: "/images/portfolio/portfolio9.png", fb: true, views: "300k" },
];

export default function WorkShowcaseSection() {
  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-24">
      {/* Circular blue light behind the title */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-96 h-24 bg-blue-500/30 rounded-full blur-2xl pointer-events-none"></div>
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14 relative">Our Work Speaks Volumes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {showcaseData.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#181c23]/80 rounded-2xl shadow-xl flex flex-col items-center justify-between text-left p-2 sm:p-4 border border-white/10 backdrop-blur-lg relative overflow-hidden min-h-[220px] min-w-[140px] max-w-[320px] w-full group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full aspect-[1/1] flex items-center justify-center mb-4">
              <img src={item.img} alt={`Portfolio ${idx + 1}`} className="w-full h-full object-contain rounded-xl" />
            </div>
            <div className="flex w-full items-center justify-between px-2 pb-2">
              <span className="flex items-center gap-1 text-blue-400">
                <img src="/images/social/facebook.png" alt="Facebook" className="w-7 h-7 sm:w-10 sm:h-10" />
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <img src="/images/eye.png" alt="Views" className="w-6 h-6 sm:w-8 sm:h-8 opacity-70" />
                {item.views}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
