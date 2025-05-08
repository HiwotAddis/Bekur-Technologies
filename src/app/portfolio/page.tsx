'use client';
import React, { useState } from "react";

// Starfield component
const Starfield = ({ count = 80 }) => (
  <div className="absolute inset-0 pointer-events-none z-10 ">
    {Array.from({ length: count }).map((_, i) => {
      // Horizontal padding: stars appear from 10% to 90% width
      const left = Math.random() * 80 + 10; // 10% to 90%
      // Vertical: only above the header (top 2% to 18%)
      const top = Math.random() * 16 + 2; // 2% to 18%
      return (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${top}%`,
            left: `${left}%`,
            filter: 'blur(0.5px)'
          }}
        />
      );
    })}
  </div>
);

const categories = [
  "All",
  "Website",
  "Mobile",
  "UI/UX Design",
  "Graphics Design",
  "Digital Marketing",
  "Social Media Management",
];

const projects = [
  // Website
  {
    id: 1,
    title: "Dr. Mitiku Specialty Dental Clinic Website",
    subtitle: "UI/UX,FRONT-END, BACK-END",
    description: "Comprehensive information about dental services and specialties. User-friendly and accessible experience for patients.",
    image: "/images/projects/dental-website.png",
    category: "Website , UI/UX Design",
    type: "website",
  },
  {
    id: 2,
    title: "Dr. Mitiku Specialty Dental Clinic Website",
    subtitle: "UI/UX,FRONT-END, BACK-END",
    description: "Comprehensive information about dental services and specialties. User-friendly and accessible experience for patients.",
    image: "/images/projects/dental-website.png",
    category: "Website , UI/UX Design",
    type: "website",
  },
  // Mobile
  {
    id: 3,
    title: "EFN Fitness App",
    subtitle: "APP DEVELOPMENT, UI/UX DESIGN",
    description: "A fitness tracking app with AI-powered workout recommendations.",
    image: "/images/portfolio/app1.png",
    category: "Mobile , APP DEVELOPMENT, UI/UX DESIGN",
    type: "mobile",
  },
  {
    id: 4,
    title: "EFN Fitness App",
    subtitle: "APP DEVELOPMENT, UI/UX DESIGN",
    description: "A fitness tracking app with AI-powered workout recommendations.",
    image: "/images/portfolio/app1.png",
    category: "Mobile , APP DEVELOPMENT, UI/UX DESIGN",
    type: "mobile",
  },
  {
    id: 5,
    title: "EFN Fitness App",
    subtitle: "APP DEVELOPMENT, UI/UX DESIGN",
    description: "A fitness tracking app with AI-powered workout recommendations.",
    image: "/images/portfolio/app1.png",
    category: "Mobile , APP DEVELOPMENT, UI/UX DESIGN",
    type: "mobile",
  },
  
  {
    id: 6,
    title: "EFN Fitness App",
    subtitle: "APP DEVELOPMENT, UI/UX DESIGN",
    description: "A fitness tracking app with AI-powered workout recommendations.",
    image: "/images/portfolio/app1.png",
    category: "Mobile , APP DEVELOPMENT, UI/UX DESIGN",
    type: "mobile",
  },
  // Graphics Design
  {
    id: 7,
    title: "Bekur Logo",
    subtitle: "GRAPHICS DESIGN",
    description: "Minimal, modern logo for Bekur Tech.",
    image: "/images/portfolio/sample.png",
    category: "Graphics Design",
    type: "logo",
  },
  {
    id: 8,
    title: "Bekur Logo",
    subtitle: "GRAPHICS DESIGN",
    description: "Minimal, modern logo for Bekur Tech.",
    image: "/images/portfolio/sample.png",
    category: "Graphics Design",
    type: "logo",
  },
  {
    id: 9,
    title: "Bekur Logo",
    subtitle: "GRAPHICS DESIGN",
    description: "Minimal, modern logo for Bekur Tech.",
    image: "/images/portfolio/sample.png",
    category: "Graphics Design",
    type: "logo",
  },
  
  // Social Media Management
  {
    id: 10,
    title: "Bekur's Promotion",
    subtitle: "SOCIAL MEDIA MANAGEMENT",
    description: "Full-service social media management for a clinic.",
    image: "/images/portfolio/portfolio1.png",
    category: "Social Media Management , Digital Marketing",
    type: "promo",
  },
  {
    id: 11,
    title: "Dr. Mitiku’s Dental Promotion",
    subtitle: "SOCIAL MEDIA MANAGEMENT",
    description: "Full-service social media management for a clinic.",
    image: "/images/portfolio/portfolio2.png",
    category: "Social Media Management , Digital Marketing",
    type: "promo",
  },
  {
    id: 12,
    title: "Dr. Mitiku’s Dental Promotion",
    subtitle: "SOCIAL MEDIA MANAGEMENT",
    description: "Full-service social media management for a clinic.",
    image: "/images/portfolio/portfolio3.png",
    category: "Social Media Management , Digital Marketing",
    type: "promo",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Helper to filter by category (allow comma-separated multi-category fields)
  function filterByCategory(list: typeof projects, categories: string[]) {
    return list.filter((p) =>
      categories.some((cat) =>
        p.category
          .split(",")
          .map((c) => c.trim().toLowerCase())
          .includes(cat.trim().toLowerCase())
      )
    );
  }

  // Deduplicate by id
  function dedupe(list: typeof projects) {
    const seen = new Set();
    return list.filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }

  // Row grouping by type
  const websiteCards = dedupe(projects.filter((p) => p.type === "website"));
  const mobileCards = dedupe(projects.filter((p) => p.type === "mobile"));
  const logoCards = dedupe(projects.filter((p) => p.type === "logo"));
  const promoCards = dedupe(projects.filter((p) => p.type === "promo"));

  // Filtering logic for each row
  const showWeb = ["All", "Website", "UI/UX Design"].includes(activeCategory);
  const showMobile = ["All", "Mobile", "UI/UX Design"].includes(activeCategory);
  const showLogo = ["All", "Graphics Design"].includes(activeCategory);
  const showPromo = ["All", "Digital Marketing", "Social Media Management"].includes(activeCategory);

  const filteredWeb = showWeb ? filterByCategory(websiteCards, [activeCategory]) : [];
  const filteredMobile = showMobile ? filterByCategory(mobileCards, [activeCategory]) : [];
  const filteredLogo = showLogo ? filterByCategory(logoCards, [activeCategory]) : [];
  const filteredPromo = showPromo ? filterByCategory(promoCards, [activeCategory]) : [];

  // For 'All', show all; for other tabs, show only filtered
  const getRow = (row, filteredRow) => activeCategory === "All" ? row : filteredRow;


  return (
    <main className="relative min-h-screen bg-[#000104] font-poppins overflow-hidden w-full">
      <section className="relative pt-20 pb-10 text-center overflow-hidden">
        {/* Starfield */}
        <div className="absolute left-0 top-0 w-full" style={{height: '900px', pointerEvents: 'none', zIndex: 10}}>
          <Starfield count={80} />
        </div>
        {/* Big Light Blue Circular Shadows */}
        <div className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">Our Work</h1>
          <p className="text-gray-400 text-lg mb-12">
          Showcasing some of our digital masterpieces and result-inspired technology solutions for our clients.
          </p>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 py-20 text-center relative overflow-visible">
        
        {/* Filter Bar */}
        <div className="flex py-10 gap-4 overflow-x-auto mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat.trim());
                console.log('Active category set to:', cat.trim());
              }}
              className={`min-w-[150px] px-4 py-1 rounded-[10px] font-bold text-white text-sm transition-all duration-200 border border-[#1b2230] focus:outline-none
                ${activeCategory.trim() === cat.trim()
                  ? 'bg-[#060d1f] text-white border-2 border-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.25)]'
                  : 'bg-[#060d1f] text-white hover:text-white hover:border-blue-700'}
              `}
              style={{boxShadow: activeCategory.trim() === cat.trim() ? '0 0 16px 0 #2563eb55' : undefined}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Rows */}
        <div className="flex flex-col gap-10">
          {/* Website Row */}
          {getRow(websiteCards, filteredWeb).length > 0 && (
            <div className="flex flex-wrap gap-8 justify-center">
              {getRow(websiteCards, filteredWeb).slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="bg-[#10131a] rounded-3xl shadow-2xl flex flex-col items-start overflow-hidden group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 max-w-xl w-full p-6"
                  style={{minHeight: 420}}
                >
                  <div className="w-full mb-3">
                    <img src={project.image} alt={project.title} className="object-cover w-full h-56 md:h-64 rounded-t-2xl bg-[#181d27]" />
                  </div>
                  <div className="w-full flex flex-col items-start mt-2">
                    <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">{project.subtitle}</p>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2" style={{lineHeight:'1.2'}}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-[17px] leading-snug font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Mobile Row */}
          {(() => {
            const mobileRow = getRow(mobileCards, filteredMobile).slice(0, 4);
            return mobileRow.length > 0 ? (
              <div className=" grid grid-cols-2 md:grid-cols-4  items-center justify-center">
                {mobileRow.map((project) => (
                  <div
                    key={project.id}
                    className=" flex flex-col items-center overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all duration-300  w-full"
                  >
                    {/* Phone Mockup */}
                    <div className="w-full flex items-center justify-center mt-2">
                      <div
                        className="relative flex items-center justify-center"
                        // style={{
                        //   width: '210px',
                        //   height: '420px',
                        //   borderRadius: '2.3rem',
                        //   background: '#14161e',
                        //   boxShadow: '0 8px 32px 0 #0008',
                        // }}
                      >
                        <div
                          className="absolute inset-0 z-10"
                          // style={{
                          //   borderRadius: '2.1rem',
                          //   border: '2.5px solid #d1d5db',
                          //   pointerEvents: 'none',
                          //   boxSizing: 'border-box',
                          // }}
                        />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="relative object-contain w-[292px] h-[500px] rounded-[2rem] z-0"
                          style={{boxShadow: 'inset 0 0 18px 0 #000a'}}
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-start mt-3 pl-5">
                      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{project.subtitle}</p>
                      <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            ) : null;
          })()}
          {/* Logo Row */}
          {(() => {
            const logoRow = getRow(logoCards, filteredLogo).slice(0, 3);
            return logoRow.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {logoRow.map((project) => (
                  <div
                    key={project.id}
                    className="bg-[#10131a] rounded-3xl shadow-2xl flex flex-col items-start overflow-hidden group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto p-5"
                  >
                    <div className="w-full aspect-square flex items-center justify-center mb-4">
                      <img src={project.image} alt={project.title} className="object-contain w-full h-full rounded-2xl" />
                    </div>
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{project.subtitle}</p>
                    <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                  </div>
                ))}
              </div>
            ) : null;
          })()}
          {/* Promo Row */}
          {(() => {
            const promoRow = getRow(promoCards, filteredPromo).slice(0, 3);
            return promoRow.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {promoRow.map((project) => (
                  <div
                    key={project.id}
                    className="bg-[#10131a] rounded-3xl shadow-2xl flex flex-col items-start overflow-hidden group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto p-5"
                  >
                    <div className="w-full aspect-square flex items-center justify-center mb-4">
                      <img src={project.image} alt={project.title} className="object-contain w-full h-full rounded-2xl" />
                    </div>
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{project.subtitle}</p>
                    <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                  </div>
                ))}
              </div>
            ) : null;
          })()}

        </div>
      </section>
      {/* Newsletter Section */}
      <section className="w-full flex justify-center items-center py-16 px-10">
          <div className="w-full max-w-7xl bg-gradient-to-br from-[#232c3b]/50 to-[#101624]/50 rounded-3xl shadow-2xl px-8 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 relative overflow-hidden">
            {/* Glowing lights left and right */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="flex-1 min-w-[250px] text-left pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
              <p className="text-gray-300 text-base md:text-lg max-w-lg">Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.</p>
            </div>
            <form className="relative z-10 flex-1 flex items-center justify-end w-full md:w-auto">
            <div className="flex w-full md:w-[500px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl rounded-r-none bg-gradient-to-r from-[#23263a] to-[#181c2a] text-white placeholder-gray-400 px-5 py-4 outline-none border-none focus:ring-2 focus:ring-blue-600 text-base"
                style={{minWidth: 0}}
              />
              <button type="submit" className="rounded-r-xl rounded-l-none bg-white text-black font-semibold px-8 py-4 transition hover:bg-blue-100 focus:outline-none">
                Subscribe
              </button>
            </div>
          </form>
          </div>
        </section>
    </main>
  );
}
