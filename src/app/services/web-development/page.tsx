import React from "react";

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
const webServices = [
  {
    icon: "/icons/company.png",
    title: "Company Website",
  },
  {
    icon: "/icons/ecommerce.png",
    title: "E-commerce Site",
  },
  {
    icon: "/icons/web-portal.png",
    title: "Web Portals",
  },
  {
    icon: "/icons/dashboard.png",
    title: "Admin Dashboards",
  },
  {
    icon: "/icons/blogs.png",
    title: "Blogs",
  },
  {
    icon: "/icons/landing-page.png",
    title: "Landing Pages",
  },
];

export default function WebDevelopmentDetailPage() {
  return (
    <main className="min-h-screen w-full bg-[#06091a] relative">
      {/* Hero Section */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Starfield */}
        <div className="absolute left-0 top-0 w-full" style={{height: '900px', pointerEvents: 'none', zIndex: 10}}>
          <Starfield count={80} />
        </div>
        {/* Big Light Blue Circular Shadows */}
        <div className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">We Build Websites That Build Your Brand</h1>
          <p className="text-gray-400 text-lg mb-12">
          Engaging design, smart development, and seamless user experiences
          </p>
        </div>
      </section>
      

      {/* Service We Offer Section */}
      <section className="w-full flex flex-col items-center justify-center py-12 px-2">
        <div className="w-full max-w-7xl   px-2 sm:px-8 py-12 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Glowing blue light behind the title */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 w-72 h-12 bg-blue-500/30 rounded-full blur-2xl pointer-events-none z-0"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 z-10 relative">Service We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
            {webServices.map((service, idx) => (
              <div key={idx} className="bg-[#181c23]/80 rounded-2xl flex flex-col items-center justify-center text-center p-8 border border-white/10 shadow-md min-h-[140px] transition-transform duration-300 hover:scale-105">
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4 object-contain" />
                <span className="text-white font-semibold text-lg">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 px-2 bg-transparent relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative">
          {/* Glowing blue light behind the title */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-80 h-12 bg-blue-500/30 rounded-full blur-2xl pointer-events-none z-0"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 z-10 relative">Why Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full z-10">
            {/* Card 1: SEO Ready */}
            <div className="bg-[#10131b]/80 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center p-10 min-h-[220px] relative overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
              {/* Top brightness glow */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-12 bg-white/30 rounded-full blur-2xl pointer-events-none z-0"></div>
              <div className="mb-6 flex items-center justify-center">
                <img src="/images/services/magnifier.png" alt="SEO Ready" className="w-14 h-14" />
              </div>
              <span className="text-white font-bold text-xl mb-2">SEO- Ready</span>
              <span className="text-gray-400 text-base">Streamlined for search engines</span>
              {/* Blue glow at bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-14 bg-blue-500/40 rounded-full blur-2xl pointer-events-none z-0"></div>
            </div>
            {/* Card 2: Mobile Responsive */}
            <div className="bg-[#10131b]/80 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center p-10 min-h-[220px] relative overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
              {/* Top brightness glow */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-12 bg-white/30 rounded-full blur-2xl pointer-events-none z-0"></div>
              <div className="mb-6 flex items-center justify-center">
                <img src="/images/services/calendar.png" alt="Mobile Responsive" className="w-14 h-14" />
              </div>
              <span className="text-white font-bold text-xl mb-2">Mobile Responsive</span>
              <span className="text-gray-400 text-base">Looks great on all Devices</span>
              {/* Blue glow at bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-14 bg-blue-500/40 rounded-full blur-2xl pointer-events-none z-0"></div>
            </div>
            {/* Card 3: Clean Code */}
            <div className="bg-[#10131b]/80 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center p-10 min-h-[220px] relative overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
              {/* Top brightness glow */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-12 bg-white/30 rounded-full blur-2xl pointer-events-none z-0"></div>
              <div className="mb-6 flex items-center justify-center">
                <img src="/images/services/creative.png" alt="Clean Code" className="w-14 h-14" />
              </div>
              <span className="text-white font-bold text-xl mb-2">Clean Code</span>
              <span className="text-gray-400 text-base">Robust and maintainable</span>
              {/* Blue glow at bottom */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-14 bg-blue-500/40 rounded-full blur-2xl pointer-events-none z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-2 bg-transparent relative">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center relative">
          {/* Glowing blue light behind the title */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-96 h-14 bg-blue-500/30 rounded-full blur-2xl pointer-events-none z-0"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 z-10 relative">Our Process</h2>
          {/* Process Grid */}
          <div className="relative w-full z-10">
            {/* Row 1 */}
            <div className="relative w-full mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/goal.png" alt="Discovery & Planning" className="w-16 h-16 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Discovery & Planning</span>
                  <span className="text-gray-400 text-sm">We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape</span>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/goal.png" alt="UI/UX Design for Web" className="w-16 h-16 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">UI/UX Design for Web</span>
                  <span className="text-gray-400 text-sm">We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape</span>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/goal.png" alt="Development" className="w-16 h-16 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Development</span>
                  <span className="text-gray-400 text-sm">We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape</span>
                </div>
              </div>
              {/* Arrows between cards (row 1) */}
              <div className="hidden md:block absolute left-0 top-12 w-full h-16 pointer-events-none z-20">
                {/* Arrow from Discovery & Planning to UI/UX Design for Web */}
                <svg className="absolute left-[16.5%]" width="33%" height="64" viewBox="0 0 320 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32 Q160 0 320 32" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowheadRightRow1A)" />
                  <defs>
                    <marker id="arrowheadRightRow1A" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,8 L8,4 Z" fill="#fff" />
                    </marker>
                  </defs>
                </svg>
                {/* Arrow from UI/UX Design for Web to Development */}
                <svg className="absolute left-[49.5%]" width="33%" height="64" viewBox="0 0 320 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32 Q160 64 320 32" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowheadRightRow1B)" />
                  <defs>
                    <marker id="arrowheadRightRow1B" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L0,8 L8,4 Z" fill="#fff" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Row 2 */}
            <div className="relative w-full mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full">
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/goal.png" alt="Deployment" className="w-16 h-16 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Deployment</span>
                  <span className="text-gray-400 text-sm">We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape</span>
                </div>
                {/* Step 5 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/goal.png" alt="Hosting" className="w-16 h-16 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Hosting</span>
                  <span className="text-gray-400 text-sm">We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape</span>
                </div>
                {/* Step 6 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/goal.png" alt="Testing" className="w-16 h-16 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Testing</span>
                  <span className="text-gray-400 text-sm">We embrace continuous learning and adaptability, ensuring we stay a head in a rapidly evolving digital landscape</span>
                </div>
              </div>
              {/* Arrows between cards (left-pointing) */}
              <div className="hidden md:block absolute left-0 top-12 w-full h-16 pointer-events-none z-20">
                {/* Arrow from Hosting to Deployment (arrowhead at left, markerEnd) */}
                <svg className="absolute left-[16.5%]" width="33%" height="64" viewBox="0 0 320 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M320 32 Q160 0 0 32" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowheadLeftA)" />
                  <defs>
                    <marker id="arrowheadLeftA" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                      <path d="M8,0 L8,8 L0,4 Z" fill="#fff" />
                    </marker>
                  </defs>
                </svg>
                {/* Arrow from Testing to Hosting (arrowhead at left, markerEnd) */}
                <svg className="absolute left-[49.5%]" width="33%" height="64" viewBox="0 0 320 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M320 32 Q160 64 0 32" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowheadLeftB)" />
                  <defs>
                    <marker id="arrowheadLeftB" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="strokeWidth">
                      <path d="M8,0 L8,8 L0,4 Z" fill="#fff" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our work section */}
      <section className="mt-20 px-4 md:px-0">
        <div className="relative flex justify-center items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white z-10 relative">Our work</h2>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-16 bg-blue-600/30 rounded-full blur-2xl z-0"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1,2,3,4].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#181d27] to-[#10131a] rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:bg-blue-900/20 relative overflow-hidden"
              style={{ boxShadow: '0 0 40px 0 #1e293b44' }}
            >
              <img
                src="/images/projects/dental-website.png"
                alt="Dr. Mitku Specialty Dental Clinic Website"
                className="rounded-lg w-full object-cover mb-4"
              />
              <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">UI/UX Design, Front-End, Back-End</div>
              <div className="text-white font-bold text-lg mb-2">Dr. Mitku Specialty Dental Clinic Website:</div>
              <div className="text-gray-300 text-sm">
                Comprehensive information about dental services and specialties. User-friendly and accessible experience for patients.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies section */}
      <section className="mt-20 px-4 md:px-0">
        <div className="relative rounded-2xl shadow-xl max-w-6xl mx-auto py-12 px-4 md:px-16 overflow-hidden bg-transparent">
          {/* Glowing blue lights */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl z-0" style={{filter: 'blur(80px)'}}></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl z-0" style={{filter: 'blur(80px)'}}></div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">Tools & Technologies</h2>
          <div className="grid grid-cols-5 gap-y-10 gap-x-6 md:gap-x-10 justify-items-center">
            {/* Row 1 */}
            <img src="/icons/github.png" alt="GitHub" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/wordpress.png" alt="WordPress" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/laravel.png" alt="Laravel" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/tailwind.png" alt="Tailwind CSS" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/react.png" alt="React" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            {/* Row 2 */}
            <img src="/icons/js.png" alt="JavaScript" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/postman.png" alt="Postman" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/nodejs.png" alt="Node.js" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/typescript.png" alt="TypeScript" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
            <img src="/icons/vscode.png" alt="VS Code" className="w-full aspect-square rounded-xl object-contain transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20"/>
          </div>
        </div>
      </section>
      {/* Pricing Plans Section (Choose Your Plan) */}
      <section className="relative z-10 w-full py-20 bg-transparent">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-5">Choose Your Plan</h2>
          {/* For Tiktok */}
          <div >
            
            <p className="text-lg text-gray-300 text-left mb-12 mt-6 font-medium">For Tiktok</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#23252b] flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-[#181a1f]"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">STARTER</h3>
                <p className="text-gray-400 text-sm mb-6">Best for personal use.</p>
                <div className="text-4xl text-white font-bold mb-1">$120 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> User friendly interface</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Local data storage</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Push notifications</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Firebase integration</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> App submission play store</li>
                  </ul>
                </div>
              </div>
              {/* Standard Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] relative transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-blue-500"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">STANDARD</h3>
                <p className="text-gray-400 text-sm mb-6">For large teams & corporations.</p>
                <div className="text-4xl text-white font-bold mb-1">$200 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white text-black font-semibold tracking-wide border border-white/10 hover:bg-blue-500 hover:text-white transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> All in the starter package</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Enhanced UI/UX design</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Social media integration</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> In-app purchases</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Basic backend integration</li>
                  </ul>
                </div>
              </div>
              {/* Advanced Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#23252b] flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-[#181a1f]"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">ADVANCED</h3>
                <p className="text-gray-400 text-sm mb-6">Best for business owners.</p>
                <div className="text-4xl text-white font-bold mb-1">$400 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> All in the standard package</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Advanced UI/UX Design</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Chat or messaging functionalities</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Robust backend development</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Third-party API integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* For Facebook */}
          <div>
            
            <p className="text-lg text-gray-300 text-left mb-12 mt-6 font-medium">For Facebook</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#23252b] flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-[#181a1f]"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">STARTER</h3>
                <p className="text-gray-400 text-sm mb-6">Best for personal use.</p>
                <div className="text-4xl text-white font-bold mb-1">$120 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> User friendly interface</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Local data storage</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Push notifications</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Firebase integration</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> App submission play store</li>
                  </ul>
                </div>
              </div>
              {/* Standard Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] relative transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-blue-500"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">STANDARD</h3>
                <p className="text-gray-400 text-sm mb-6">For large teams & corporations.</p>
                <div className="text-4xl text-white font-bold mb-1">$200 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white text-black font-semibold tracking-wide border border-white/10 hover:bg-blue-500 hover:text-white transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> All in the starter package</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Enhanced UI/UX design</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Social media integration</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> In-app purchases</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Basic backend integration</li>
                  </ul>
                </div>
              </div>
              {/* Advanced Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#23252b] flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-[#181a1f]"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">ADVANCED</h3>
                <p className="text-gray-400 text-sm mb-6">Best for business owners.</p>
                <div className="text-4xl text-white font-bold mb-1">$400 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> All in the standard package</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Advanced UI/UX Design</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Chat or messaging functionalities</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Robust backend development</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Third-party API integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* For LinkedIn */}
          <div >
            
            <p className="text-lg text-gray-300 text-left mb-12 mt-6 font-medium">For LinkedIn</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#23252b] flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-[#181a1f]"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">STARTER</h3>
                <p className="text-gray-400 text-sm mb-6">Best for personal use.</p>
                <div className="text-4xl text-white font-bold mb-1">$120 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> User friendly interface</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Local data storage</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Push notifications</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Firebase integration</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> App submission play store</li>
                  </ul>
                </div>
              </div>
              {/* Standard Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] relative transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-blue-500"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">STANDARD</h3>
                <p className="text-gray-400 text-sm mb-6">For large teams & corporations.</p>
                <div className="text-4xl text-white font-bold mb-1">$200 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white text-black font-semibold tracking-wide border border-white/10 hover:bg-blue-500 hover:text-white transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> All in the starter package</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Enhanced UI/UX design</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Social media integration</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> In-app purchases</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Basic backend integration</li>
                  </ul>
                </div>
              </div>
              {/* Advanced Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-4"><span className="inline-block w-8 h-8 rounded-full bg-[#23252b] flex items-center justify-center"><span className="inline-block w-3 h-3 rounded-full border-2 border-white bg-[#181a1f]"></span></span></div>
                <h3 className="text-white text-lg font-bold mb-1 tracking-widest">ADVANCED</h3>
                <p className="text-gray-400 text-sm mb-6">Best for business owners.</p>
                <div className="text-4xl text-white font-bold mb-1">$400 <span className="text-lg font-normal text-gray-400">/ per month</span></div>
                <button className="mt-6 w-full py-2 rounded-lg bg-white/5 text-white font-semibold tracking-wide border border-white/10 hover:bg-white/10 transition mb-8">BUY NOW</button>
                <hr className="w-full border-t border-white/10 mb-4" />
                <div>
                  <p className="text-white font-semibold mb-2">What you will get</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> All in the standard package</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Advanced UI/UX Design</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Chat or messaging functionalities</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Robust backend development</li>
                    <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></span> Third-party API integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
