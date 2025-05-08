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
export default function DigitalMarketingPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#000104] overflow-x-hidden">
      <section className="relative py-20 text-center overflow-hidden">
        {/* Starfield */}
        <div className="absolute left-0 top-0 w-full" style={{height: '900px', pointerEvents: 'none', zIndex: 10}}>
          <Starfield count={80} />
        </div>
        {/* Big Light Blue Circular Shadows */}
        <div className="hidden md:block absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2 w-[400px] h-[280px] bg-[#60A5FA] opacity-20 rounded-full blur-3xl z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-5xl font-bold text-white mt-10 mb-4">Digital Marketing</h1>
          <p className="text-gray-400 text-lg mb-12">
          We drive traffic and sales through targeted online campaigns
          </p>
        </div>
      </section>
      
      <section className="relative z-10 w-full py-8 bg-[#000104]">
        {/* Blue Glowing Light in Header */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-80 h-32 bg-blue-400/30 blur-[70px] rounded-full pointer-events-none z-0" />
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center py-10 relative z-10">Service We Offer</h2>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-14">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-br from-[#181c24]/80 to-[#182a4b]/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/30">
            <img src="/images/services/lamp.png" alt="Lamp Icon" className="relative z-10 w-10 h-10 mb-4 object-contain" />
            <h3 className="relative z-10 text-white text-xl font-semibold mb-2">SEO That Ranks</h3>
            <p className="relative z-10 text-gray-300 text-sm">Climb to the top of search results and stay there. We optimize your site to be found — and chosen.</p>
            {/* Blue glow */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-36 h-10 bg-blue-500/30 blur-[32px] rounded-full pointer-events-none z-0" />
          </div>
          {/* Card 2 */}
          <div className="relative bg-gradient-to-br from-[#181c24]/80 to-[#182a4b]/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/30">
            <img src="/images/services/lamp.png" alt="Lamp Icon" className="relative z-10 w-10 h-10 mb-4 object-contain" />
            <h3 className="relative z-10 text-white text-xl font-semibold mb-2">PPC That Pays Off</h3>
            <p className="relative z-10 text-gray-300 text-sm">We manage high-converting Google & Meta Ads that bring the right clicks — without wasting your budget.</p>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-36 h-10 bg-blue-500/30 blur-[32px] rounded-full pointer-events-none z-0" />
          </div>
          {/* Card 3 */}
          <div className="relative bg-gradient-to-br from-[#181c24]/80 to-[#182a4b]/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/30">
            <img src="/images/services/lamp.png" alt="Lamp Icon" className="relative z-10 w-10 h-10 mb-4 object-contain" />
            <h3 className="relative z-10 text-white text-xl font-semibold mb-2">Social Media That Connects</h3>
            <p className="relative z-10 text-gray-300 text-sm">From content to campaigns, we build social strategies that boost engagement and grow your audience.</p>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-36 h-10 bg-blue-500/30 blur-[32px] rounded-full pointer-events-none z-0" />
          </div>
          {/* Card 4 */}
          <div className="relative bg-gradient-to-br from-[#181c24]/80 to-[#182a4b]/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/30">
            <img src="/images/services/lamp.png" alt="Lamp Icon" className="relative z-10 w-10 h-10 mb-4 object-contain" />
            <h3 className="relative z-10 text-white text-xl font-semibold mb-2">Content That Converts</h3>
            <p className="relative z-10 text-gray-300 text-sm">Blogs, copy, creatives — we craft words and visuals that turn browsers into buyers.</p>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-36 h-10 bg-blue-500/30 blur-[32px] rounded-full pointer-events-none z-0" />
          </div>
          {/* Card 5 */}
          <div className="relative bg-gradient-to-br from-[#181c24]/80 to-[#182a4b]/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/30">
            <img src="/images/services/lamp.png" alt="Lamp Icon" className="relative z-10 w-10 h-10 mb-4 object-contain" />
            <h3 className="relative z-10 text-white text-xl font-semibold mb-2">Emails That Get Opened</h3>
            <p className="relative z-10 text-gray-300 text-sm">Automated flows and sharp campaigns designed to nurture leads and drive action.</p>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-36 h-10 bg-blue-500/30 blur-[32px] rounded-full pointer-events-none z-0" />
          </div>
          {/* Card 6 */}
          <div className="relative bg-gradient-to-br from-[#181c24]/80 to-[#182a4b]/80 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/5 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-blue-900/30">
            <img src="/images/services/lamp.png" alt="Lamp Icon" className="relative z-10 w-10 h-10 mb-4 object-contain" />
            <h3 className="relative z-10 text-white text-xl font-semibold mb-2">Conversions That Count</h3>
            <p className="relative z-10 text-gray-300 text-sm">We analyze behavior and fine-tune your funnels to make sure visitors don’t just land — they act.</p>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-36 h-10 bg-blue-500/30 blur-[32px] rounded-full pointer-events-none z-0" />
          </div>
        </div>
      </section>
      {/* Why Us Section */}
      <section className="relative z-10 w-full py-16 bg-transparent">
        <div className="w-full max-w-6xl mx-auto px-4">
          {/* Blue Glowing Light for Why Us Header */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-72 h-28 bg-blue-400/30 blur-[70px] rounded-full pointer-events-none z-0" />
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14 relative z-10" style={{ textShadow: '0 0 36px #3b82f6' }}>Why Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Row 1 */}
            <div className="flex items-start gap-5">
              <img src="/images/services/brain.png" alt="Brain" className="w-12 h-12 rounded-xl object-contain bg-[#232c3b]/60" />
              <div>
                <h3 className="text-white text-lg font-bold mb-1">Data Over Guesswork</h3>
                <p className="text-gray-300 text-sm">Every decision is backed by numbers, not assumptions — so we can scale what works, fast.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <img src="/images/services/target.png" alt="Target" className="w-12 h-12 rounded-xl object-contain bg-[#232c3b]/60" />
              <div>
                <h3 className="text-white text-lg font-bold mb-1">ROI Is the Goal</h3>
                <p className="text-gray-300 text-sm">We don’t chase vanity metrics. Our focus is on what matters: return on your marketing investment.</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex items-start gap-5">
              <img src="/images/services/magnifier.png" alt="Magnifier" className="w-12 h-12 rounded-xl object-contain bg-[#232c3b]/60" />
              <div>
                <h3 className="text-white text-lg font-bold mb-1">Radically Transparent Reporting</h3>
                <p className="text-gray-300 text-sm">No confusing dashboards or vague updates — just clear, honest insights you can act on.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <img src="/images/services/lightning.png" alt="Lightning" className="w-12 h-12 rounded-xl object-contain bg-[#232c3b]/60" />
              <div>
                <h3 className="text-white text-lg font-bold mb-1">Certified Channel Experts</h3>
                <p className="text-gray-300 text-sm">Google Ads, Meta, HubSpot, and more — we’re trained, tested, and ready to deliver results across platforms.</p>
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex items-start gap-5">
              <img src="/images/services/gear.png" alt="Gear" className="w-12 h-12 rounded-xl object-contain bg-[#232c3b]/60" />
              <div>
                <h3 className="text-white text-lg font-bold mb-1">Custom Campaigns, Always</h3>
                <p className="text-gray-300 text-sm">No cookie-cutter playbooks. Your business is unique — and so is your marketing plan.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <img src="/images/services/rocket.png" alt="Rocket" className="w-12 h-12 rounded-xl object-contain bg-[#232c3b]/60" />
              <div>
                <h3 className="text-white text-lg font-bold mb-1">Cross-Channel Power</h3>
                <p className="text-gray-300 text-sm">We connect your campaigns across search, social, and email — for a seamless, high-impact strategy.</p>
              </div>
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
                    <img src="/images/services/brain2.png" alt="Discovery & Planning" className="w-20 h-20 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Audit & Strategy</span>
                  <span className="text-gray-400 text-sm">We dive deep into your brand, audience, and competition — then build a data-driven strategy tailored to your goals.</span>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/calendar2.png" alt="UI/UX Design for Web" className="w-20 h-20 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Campaign Planning</span>
                  <span className="text-gray-400 text-sm">We map out your campaigns, choose the right channels, and set KPIs — everything is aligned before we launch.</span>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/paint.png" alt="Development" className="w-20 h-20 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Creative & Ad Setup</span>
                  <span className="text-gray-400 text-sm">We map out your campaigns, choose the right channels, and set KPIs — everything is aligned before we launch.</span>
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
                    <img src="/images/services/launch.png" alt="Deployment" className="w-20 h-20 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Launch</span>
                  <span className="text-gray-400 text-sm">Campaigns go live! We monitor early performance, adjust quickly, and ensure everything runs smoothly.</span>
                </div>
                {/* Step 5 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/graph.png" alt="Hosting" className="w-20 h-20 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Monitor & Optimize</span>
                  <span className="text-gray-400 text-sm">We constantly test, tweak, and improve — optimizing performance to lower costs and boost conversions.</span>
                </div>
                {/* Step 6 */}
                <div className="flex flex-col items-center text-center relative">
                  <div className="relative mb-6">
                    <img src="/images/services/bar2.png" alt="Testing" className="w-20 h-20 mx-auto" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-700/30 rounded-full blur-2xl pointer-events-none z-0"></div>
                  </div>
                  <span className="text-white font-bold text-lg mb-2">Report & Grow</span>
                  <span className="text-gray-400 text-sm">You get clear, insightful reports that show what’s working and where to grow next — no fluff, just results.</span>
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

      
      {/* Pricing Plans Section (Choose Your Plan) */}
      <section className="relative z-10 w-full py-20 bg-transparent">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-5">Choose Your Plan</h2>
          {/* For Tiktok */}
          <div >
            
            <p className="text-lg text-gray-300 text-left mb-12 mt-6 font-medium">For Tiktok</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] relative transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] relative transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] relative transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
              <div className="bg-gradient-to-br from-[#161b22] to-[#191e29] rounded-3xl p-8 flex flex-col items-start shadow-2xl border border-white/5 min-h-[520px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.25)] hover:bg-blue-900/20">
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
