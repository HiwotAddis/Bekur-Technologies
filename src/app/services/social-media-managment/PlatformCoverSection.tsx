import React from "react";

const platforms = [
  { img: "/images/social/youtube.png", alt: "YouTube" },
  { img: "/images/social/telegram.png", alt: "Telegram" },
  { img: "/images/social/tiktok.png", alt: "TikTok" },
  { img: "/images/social/x.png", alt: "X" },
  { img: "/images/social/telegram.png", alt: "Telegram" },
  { img: "/images/social/facebook.png", alt: "Facebook" },
  { img: "/images/social/instagram.png", alt: "Instagram" },
  { img: "/images/social/twitter.png", alt: "Twitter" },
  { img: "/images/social/linkedin.png", alt: "LinkedIn" },
  { img: "/images/social/instagram.png", alt: "Instagram" },
];

export default function PlatformCoverSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-14">
      <div className="bg-[#10131b]/80 rounded-3xl shadow-2xl border border-white/10 px-2 sm:px-8 py-12 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Blue glows left/right */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 z-10">Platform We Cover</h2>
        <div className="grid grid-cols-5 gap-y-8 gap-x-12 z-10">
          {platforms.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span className="inline-flex items-center justify-center w-30 h-30 rounded-2xl  relative group overflow-hidden">
                <img src={item.img} alt={item.alt} className="relative w-full h-full object-contain z-10" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
