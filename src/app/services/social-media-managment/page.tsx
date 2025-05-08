import React from "react";
import WorkShowcaseSection from "./WorkShowcaseSection";
import PlatformCoverSection from "./PlatformCoverSection";

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
export default function SocialMediaManagmentPage() {
  // Starfield effect for hero section
  const starCount = 80;
  const stars = Array.from({ length: starCount }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 28 + 2; // Spread more vertically for realism
    const size = Math.random() * 2 + 1;
    return (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-70"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          filter: 'blur(0.5px)'
        }}
      />
    );
  });

  return (
    <main className="relative bg-[#06091a]  w-full overflow-hidden">
      <section className="relative py-20 text-center overflow-hidden">
        {/* Starfield */}
        <div className="absolute left-0 top-0 w-full" style={{height: '900px', pointerEvents: 'none', zIndex: 10}}>
          <Starfield count={80} />
        </div>
        {/* Big Light Blue Circular Shadows */}
        <div className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">Social Media Managment</h1>
          <p className="text-gray-400 text-lg mb-12">
          We Don’t Just Post. We Perform.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative z-20 w-full max-w-6xl mx-auto px-4 pt-4 pb-24">
        {/* Circular blue light behind the title */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-12 w-80 h-28 bg-blue-500/30 rounded-full blur-2xl pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14 relative">What We Do</h2>
        <div className="flex flex-col gap-8 items-center">
          {/* First row: 3 cards */}
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 min-w-[270px] max-w-[400px] bg-[#15181f]/80 rounded-2xl shadow-md flex flex-col items-center justify-center text-center px-6 py-10 border border-white/5 backdrop-blur-sm mx-auto relative overflow-visible transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/20">
                <div className="mb-5">
                  <img src="/images/services/lamp.png" alt="Lamp" className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">We Think Beyond Design</h3>
                <p className="text-gray-300 text-base max-w-xs">We don’t just create visuals, we build brand experiences that tell your story and connect with your audience.</p>
                {/* Blue light shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-32 h-8 bg-blue-500/30 rounded-full blur-2xl z-0 pointer-events-none"></div>
              </div>
            ))}
          </div>
          {/* Second row: 2 cards centered under the first row */}
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center mt-2">
            {[0, 1].map((i) => (
              <div key={i} className={`flex-1 min-w-[270px] max-w-[400px] bg-[#15181f]/80 rounded-2xl shadow-md flex flex-col items-center justify-center text-center px-6 py-10 border border-white/5 backdrop-blur-sm mx-auto relative overflow-visible transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/20 ${i === 0 ? 'sm:ml-[13%]' : 'sm:mr-[13%]'}`}>
                <div className="mb-5">
                  <img src="/images/services/lamp.png" alt="Lamp" className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">We Think Beyond Design</h3>
                <p className="text-gray-300 text-base max-w-xs">We don’t just create visuals, we build brand experiences that tell your story and connect with your audience.</p>
                {/* Blue light shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-32 h-8 bg-blue-500/30 rounded-full blur-2xl z-0 pointer-events-none"></div>
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
      <WorkShowcaseSection />
      <PlatformCoverSection />
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