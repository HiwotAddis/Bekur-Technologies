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

export default function GraphicsDesignDetailPage() {
  return (
    <main className="min-h-screen w-full bg-[#06091a] text-white">
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
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">Graphics Design Solutions</h1>
          <p className="text-gray-400 text-lg mb-12">
          Elevate your brand with stunning visuals, creative assets, and professional design tailored for your audience. 
          </p>
        </div>
      </section>
      

      {/* What We Offer */}
      <section className="w-full py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What We Do</h2>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-[#181d27] rounded-xl p-8 flex flex-col items-center shadow-lg min-h-[170px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <img src="/images/services/lamp.png" alt="Lamp Icon" className="mb-4 w-10 h-10 object-contain" />
                <h3 className="text-white font-semibold text-lg mb-2 text-center">We Think Beyond Design</h3>
                <p className="text-gray-400 text-sm text-center">We don’t just create visuals, but build real experiences that help your message connect with your audience.</p>
              </div>
            ))}
          </div>
          {/* Bottom row: 2 cards, centered */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
            {[4,5].map((i) => (
              <div key={i} className="bg-[#181d27] rounded-xl p-8 flex flex-col items-center shadow-lg min-h-[170px] w-full md:w-1/3 transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
                <img src="/images/services/lamp.png" alt="Lamp Icon" className="mb-4 w-10 h-10 object-contain" />
                <h3 className="text-white font-semibold text-lg mb-2 text-center">We Think Beyond Design</h3>
                <p className="text-gray-400 text-sm text-center">We don’t just create visuals, but build real experiences that help your message connect with your audience.</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Social Strategy Section */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-4 pt-4 pb-24">
        {/* Circular blue light behind the title */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-96 h-24 bg-blue-500/30 rounded-full blur-2xl pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14 relative">Our Social Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Card 1 */}
          <div className="bg-[#181c23]/80 rounded-2xl shadow-xl flex flex-col items-center justify-start text-center px-6 py-8 border border-white/10 backdrop-blur-lg relative overflow-visible min-h-[260px] min-w-[200px] group transition-transform duration-300 hover:scale-105">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5 relative">
                <span className="absolute inset-0 rounded-xl bg-blue-400/10 blur-lg"></span>
                <span className="relative w-14 h-14 flex items-center justify-center rounded-xl ">
                  <img src="/images/services/magnifier.png" alt="Research & Planning" className="object-contain w-20 h-20" />
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 mt-2">Research & Planning</h3>
            <p className="text-gray-400 text-xs leading-snug">Boost engagement and grow your business with our email marketing services</p>
            {/* Blue light shadow at bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-40 h-10 bg-blue-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#181c23]/80 rounded-2xl shadow-xl flex flex-col items-center justify-start text-center px-6 py-8 border border-white/10 backdrop-blur-lg relative overflow-visible min-h-[260px] min-w-[200px] group transition-transform duration-300 hover:scale-105">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5 relative">
                <span className="absolute inset-0 rounded-xl bg-blue-400/10 blur-lg"></span>
                <span className="relative w-14 h-14 flex items-center justify-center rounded-xl ">
                  <img src="/images/services/calendar.png" alt="Content Calander" className="object-contain w-20 h-20" />
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 mt-2">Content Calander</h3>
            <p className="text-gray-400 text-xs leading-snug">Boost engagement and grow your business with our email marketing services</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-40 h-10 bg-blue-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
          {/* Card 3 */}
          <div className="bg-[#181c23]/80 rounded-2xl shadow-xl flex flex-col items-center justify-start text-center px-6 py-8 border border-white/10 backdrop-blur-lg relative overflow-visible min-h-[260px] min-w-[200px] group transition-transform duration-300 hover:scale-105">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5 relative">
                <span className="absolute inset-0 rounded-xl bg-blue-400/10 blur-lg"></span>
                <span className="relative w-14 h-14 flex items-center justify-center rounded-xl ">
                  <img src="/images/services/creative.png" alt="Creative Design" className="object-contain w-20 h-20" />
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 mt-2">Creative Design</h3>
            <p className="text-gray-400 text-xs leading-snug">Boost engagement and grow your business with our email marketing services</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-40 h-10 bg-blue-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
          {/* Card 4 */}
          <div className="bg-[#181c23]/80 rounded-2xl shadow-xl flex flex-col items-center justify-start text-center px-6 py-8 border border-white/10 backdrop-blur-lg relative overflow-visible min-h-[260px] min-w-[200px] group transition-transform duration-300 hover:scale-105">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5 relative">
                <span className="absolute inset-0 rounded-xl bg-blue-400/10 blur-lg"></span>
                <span className="relative w-14 h-14 flex items-center justify-center rounded-xl ">
                  <img src="/images/services/bar.png" alt="Posting & Monitoring" className="object-contain w-20 h-20" />
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 mt-2">Posting & Monitoring</h3>
            <p className="text-gray-400 text-xs leading-snug">Boost engagement and grow your business with our email marketing services</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-40 h-10 bg-blue-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
          {/* Card 5 */}
          <div className="bg-[#181c23]/80 rounded-2xl shadow-xl flex flex-col items-center justify-start text-center px-6 py-8 border border-white/10 backdrop-blur-lg relative overflow-visible min-h-[260px] min-w-[200px] group transition-transform duration-300 hover:scale-105">
            <div className="w-full flex justify-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5 relative">
                <span className="absolute inset-0 rounded-xl bg-blue-400/10 blur-lg"></span>
                <span className="relative w-14 h-14 flex items-center justify-center rounded-xl ">
                  <img src="/images/services/clock.png" alt="Performance Analysis" className="object-contain w-20 h-20" />
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 mt-2">Performance Analysis</h3>
            <p className="text-gray-400 text-xs leading-snug">Boost engagement and grow your business with our email marketing services</p>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-40 h-10 bg-blue-500/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Our Work Speaks Volumes Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Our Work Speaks Volumes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(9)].map((_, idx) => (
            <div key={idx} className="relative rounded-[2rem] shadow-2xl border border-[#23263a] flex flex-col overflow-hidden group transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" >
              {/* Soft blue glow behind card */}
              <div className="absolute -inset-2 rounded-[2.2rem] bg-blue-500/10 blur-2xl z-0 pointer-events-none" />
              {/* Portfolio Image */}
              <div className="relative w-full aspect-square flex items-center justify-center z-10 p-2 md:p-4">
                <img src="/images/portfolio/sample.png" alt="Portfolio Work" className="object-cover w-full h-full rounded-[1.7rem]" />
              </div>
              {/* Footer */}
              <div className="flex items-center justify-between bg-black px-6 py-5 z-10">
                {/* Facebook pill */}
                <span className="flex items-center">
                  <span className="relative">
                    <span className="absolute inset-0 rounded-xl bg-blue-500/30 blur-md"></span>
                    <span className="relative flex items-center justify-center  rounded-xl ">
                      <img src="/images/social/facebook.png" alt="Facebook" className="w-12 h-12" />
                    </span>
                  </span>
                </span>
                {/* Eye + views pill */}
                <span className="flex items-center">
                  <span className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#131c2b] to-[#212c49] text-white text-base font-medium shadow-md">
                    <img src="/images/eye.png" alt="Views" className="w-5 h-5" />
                    <span>300k</span>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* platform we cover Section */}
       <section className="w-full flex flex-col items-center justify-center py-16 px-2">
        <div className="relative w-full max-w-7xl mx-auto rounded-3xl bg-[#10131a]/80 shadow-lg px-4 py-12 md:py-16 flex flex-col items-center border border-white/20" >
          <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-700/40 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 z-10 relative">Platform We Cover</h2>
          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="grid grid-cols-5 gap-y-12 gap-x-8 w-full max-w-4xl justify-items-center">
              {/* Row 1 */}
              <img src="/images/services/Ae.png" alt="Figma" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Lr.png" alt="Flutter" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Xd.png" alt="Firebase" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Ae.png" alt="Figma" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Lr.png" alt="Firebase" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              {/* Row 2 */}
              <img src="/images/services/Ai.png" alt="VSCode" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Ps.png" alt="React" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/A.png" alt="Node.js" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Ai.png" alt="VSCode" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
              <img src="/images/services/Ps.png" alt="Node.js" className="w-24 h-24 object-contain rounded-xl shadow-xl transition-transform duration-200 hover:scale-110 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20" />
            </div>
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-2xl hover:bg-blue-900/20">
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
